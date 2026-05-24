require('dotenv').config();

const { PrismaClient } = require('./generated/private');
const prisma = new PrismaClient();

const { PrismaClient: PrismaClientPublic } = require('./generated/public');
const prismaPublic = new PrismaClientPublic();

const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());

// Auto-redirect to login
app.get('/', (req, res) => {
    res.redirect('/pages/login.html');
});

// APIs from Public DB
app.get('/api/todas-filas', async (req, res) => {
    try {
        const filas = await prismaPublic.fila.findMany({ include: { Cliente: true }, orderBy: { data_entrada: 'asc' } });
        res.json(filas);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar filas' });
    }
});

app.get('/api/todas-reservas', async (req, res) => {
    try {
        const reservas = await prismaPublic.reserva.findMany({ include: { Cliente: true }, orderBy: { data_reserva: 'asc' } });
        res.json(reservas);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar reservas' });
    }
});

// Login de funcionário (autenticação real com bcrypt)
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
        }

        // Tenta primeiro na tabela funcionario
        let user = await prisma.funcionario.findUnique({ where: { email } });
        let role = null;
        let label = null;

        if (user) {
            role = user.cargo ?? 'waiter'; // fallback se não houver cargo definido
            label = user.nome;
        } else {
            // Tenta na tabela adm
            const adm = await prisma.adm.findUnique({ where: { email } });
            if (adm) {
                user = adm;
                role = 'admin';
                label = adm.nome;
            }
        }

        if (!user) {
            return res.status(401).json({ error: 'E-mail não reconhecido.' });
        }

        const senhaValida = await bcrypt.compare(password, user.senha);
        if (!senhaValida) {
            return res.status(401).json({ error: 'Senha incorreta.' });
        }

        res.json({ email: user.email, role, label });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno ao autenticar.' });
    }
});


app.get('/api/funcionarios', async (req, res) => {
    try {
        const funcionarios = await prisma.funcionario.findMany();
        res.json(funcionarios);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

app.post('/api/funcionarios', async (req, res) => {
    try {
        const { nome, email, cargo } = req.body;

        if (!nome || !email || !cargo) {
            return res.status(400).json({ error: 'Nome, e-mail e cargo são obrigatórios.' });
        }

        const cargosPermitidos = ['garcom', 'cozinha', 'recepcao'];
        if (!cargosPermitidos.includes(cargo)) {
            return res.status(400).json({ error: 'Cargo inválido.' });
        }

        const admin = await prisma.adm.findFirst();
        if (!admin) {
            return res.status(500).json({ error: 'Nenhum administrador encontrado no sistema.' });
        }

        const senhaHash = await bcrypt.hash('123', SALT_ROUNDS);
        const func = await prisma.funcionario.create({
            data: {
                nome,
                email,
                cargo,
                senha: senhaHash,
                adm_id: admin.adm_id
            }
        });
        res.json(func);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar funcionário' });
    }
});

app.put('/api/funcionarios/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nome, email, cargo } = req.body;

        if (!nome || !email || !cargo) {
            return res.status(400).json({ error: 'Nome, e-mail e cargo são obrigatórios.' });
        }

        const cargosPermitidos = ['garcom', 'cozinha', 'recepcao'];
        if (!cargosPermitidos.includes(cargo)) {
            return res.status(400).json({ error: 'Cargo inválido.' });
        }

        const func = await prisma.funcionario.update({
            where: { funcionario_id: id },
            data: { nome, email, cargo }
        });
        res.json(func);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
    }
});

app.delete('/api/funcionarios/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.funcionario.delete({ where: { funcionario_id: id } });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar funcionário' });
    }
});

// Atender fila
app.post('/api/atender-fila/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prismaPublic.fila.delete({ where: { id_fila: id } });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atender fila' });
    }
});

app.post('/api/chamar-fila/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prismaPublic.fila.update({
            where: { id_fila: id },
            data: { status: 'sua vez chegou' }
        });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao chamar cliente' });
    }
});

// ── PRATOS ──
app.get('/api/pratos', async (req, res) => {
    try {
        const pratos = await prisma.prato.findMany({
            include: { tempo: true },
            orderBy: { prato_id: 'asc' }
        });
        res.json(pratos.map(p => ({
            prato_id:     p.prato_id,
            nome:         p.nome,
            preco:        Number(p.preco),
            custo:        Number(p.custo),
            categoria:    p.categoria || 'Pratos',
            descricao:    p.descricao || '',
            emoji:        p.emoji || '🍽️',
            disponivel:   p.disponivel !== false,
            tempo_preparo: p.tempo?.tempo_preparo || null
        })));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar pratos' });
    }
});

app.post('/api/pratos', async (req, res) => {
    try {
        const { nome, preco, custo, categoria, descricao, emoji, disponivel, tempo_preparo } = req.body;
        const prato = await prisma.prato.create({
            data: {
                nome,
                preco:     preco     || 0,
                custo:     custo     || 0,
                categoria: categoria || 'Pratos',
                descricao: descricao || '',
                emoji:     emoji     || '🍽️',
                disponivel: disponivel !== false,
                ...(tempo_preparo != null ? {
                    tempo: { create: { tempo_preparo: parseInt(tempo_preparo) } }
                } : {})
            },
            include: { tempo: true }
        });
        res.json({
            prato_id:     prato.prato_id,
            nome:         prato.nome,
            preco:        Number(prato.preco),
            custo:        Number(prato.custo),
            categoria:    prato.categoria || 'Pratos',
            descricao:    prato.descricao || '',
            emoji:        prato.emoji || '🍽️',
            disponivel:   prato.disponivel !== false,
            tempo_preparo: prato.tempo?.tempo_preparo || null
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar prato' });
    }
});

app.put('/api/pratos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nome, preco, custo, categoria, descricao, emoji, disponivel, tempo_preparo } = req.body;
        const prato = await prisma.prato.update({
            where: { prato_id: id },
            data: {
                nome,
                preco:     preco     || 0,
                custo:     custo     || 0,
                categoria: categoria || 'Pratos',
                descricao: descricao || '',
                emoji:     emoji     || '🍽️',
                disponivel: disponivel !== false,
                ...(tempo_preparo != null ? {
                    tempo: { upsert: { create: { tempo_preparo: parseInt(tempo_preparo) }, update: { tempo_preparo: parseInt(tempo_preparo) } } }
                } : {})
            },
            include: { tempo: true }
        });
        res.json({
            prato_id:     prato.prato_id,
            nome:         prato.nome,
            preco:        Number(prato.preco),
            custo:        Number(prato.custo),
            categoria:    prato.categoria || 'Pratos',
            descricao:    prato.descricao || '',
            emoji:        prato.emoji || '🍽️',
            disponivel:   prato.disponivel !== false,
            tempo_preparo: prato.tempo?.tempo_preparo || null
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar prato' });
    }
});

app.delete('/api/pratos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.prato.delete({ where: { prato_id: id } });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar prato' });
    }
});

// ── MESAS ──
app.get('/api/mesas', async (req, res) => {
    try {
        const mesas = await prisma.mesa.findMany({ orderBy: { mesa_id: 'asc' } });
        res.json(mesas);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar mesas' });
    }
});

app.post('/api/mesas/seed', async (req, res) => {
    try {
        const count = await prisma.mesa.count();
        if (count > 0) return res.json({ message: 'Mesas já existem' });
        const mesas = [
            { capacidade: 4 }, { capacidade: 6 }, { capacidade: 2 },
            { capacidade: 4 }, { capacidade: 8 }, { capacidade: 4 },
            { capacidade: 2 }, { capacidade: 6 }, { capacidade: 4 },
            { capacidade: 2 }, { capacidade: 8 }, { capacidade: 4 },
        ];
        await prisma.mesa.createMany({ data: mesas });
        res.json({ message: 'Mesas criadas com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar mesas' });
    }
});

app.put('/api/mesas/:id/status', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { status } = req.body;
        const mesa = await prisma.mesa.update({
            where: { mesa_id: id },
            data: { status }
        });
        res.json(mesa);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar status da mesa' });
    }
});

app.post('/api/mesas/:id/checkin', async (req, res) => {
    try {
        const mesa_id = parseInt(req.params.id);
        const { n_pessoas, funcionario_id } = req.body;
        const [mesa, atendimento] = await prisma.$transaction([
            prisma.mesa.update({ where: { mesa_id }, data: { status: 'occupied' } }),
            prisma.atendimento.create({
                data: { n_pessoas, checkin: new Date(), funcionario_id: funcionario_id || 1, mesa_id }
            })
        ]);
        res.json({ mesa, atendimento });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao fazer check-in' });
    }
});

app.post('/api/mesas/:id/checkout', async (req, res) => {
    try {
        const mesa_id = parseInt(req.params.id);
        const atendimento = await prisma.atendimento.findFirst({
            where: { mesa_id, checkout: null },
            orderBy: { checkin: 'desc' }
        });
        if (!atendimento) return res.status(404).json({ error: 'Atendimento não encontrado' });
        const [mesa, atendimentoFechado] = await prisma.$transaction([
            prisma.mesa.update({ where: { mesa_id }, data: { status: 'available' } }),
            prisma.atendimento.update({
                where: { atendimento_id: atendimento.atendimento_id },
                data: { checkout: new Date() }
            })
        ]);
        res.json({ mesa, atendimento: atendimentoFechado });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao fazer checkout' });
    }
});

app.get('/api/mesas/:id/atendimento-ativo', async (req, res) => {
    try {
        const mesa_id = parseInt(req.params.id);
        const atendimento = await prisma.atendimento.findFirst({
            where: { mesa_id, checkout: null },
            orderBy: { checkin: 'desc' }
        });
        res.json(atendimento || null);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar atendimento' });
    }
});

// ── PEDIDOS ──
app.get('/api/mesas/:id/pedidos', async (req, res) => {
    try {
        const mesa_id = parseInt(req.params.id);
        const atendimento = await prisma.atendimento.findFirst({
            where: { mesa_id, checkout: null },
            orderBy: { checkin: 'desc' },
            include: {
                pedido: {
                    include: { prato: true },
                    orderBy: { pedido_id: 'asc' }
                }
            }
        });
        if (!atendimento) return res.json({ atendimento_id: null, pedidos: [] });
        res.json({
            atendimento_id: atendimento.atendimento_id,
            checkin:        atendimento.checkin,
            n_pessoas:      atendimento.n_pessoas,
            pedidos: atendimento.pedido.map(p => ({
                pedido_id:  p.pedido_id,
                prato_id:   p.prato_id,
                nome:       p.prato.nome,
                preco:      Number(p.prato.preco),
                quantidade: p.quantidade
            }))
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
});

app.post('/api/mesas/:id/pedidos', async (req, res) => {
    try {
        const mesa_id = parseInt(req.params.id);
        const { itens } = req.body;

        const atendimento = await prisma.atendimento.findFirst({
            where: { mesa_id, checkout: null },
            orderBy: { checkin: 'desc' }
        });
        if (!atendimento) return res.status(404).json({ error: 'Nenhum atendimento ativo nesta mesa' });

        const pedidos = await Promise.all(itens.map(item =>
            prisma.pedido.create({
                data: {
                    atendimento_id: atendimento.atendimento_id,
                    prato_id:       item.prato_id,
                    quantidade:     item.quantidade
                }
            })
        ));
        res.json({ success: true, pedidos });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao salvar pedidos' });
    }
});

app.listen(4000, () => {
    console.log('Servidor privado rodando em http://localhost:4000');
});