require('dotenv').config({ path: './.env' });

const { PrismaClient } = require('./generated/private');
const prisma = new PrismaClient();

const { PrismaClient: PrismaClientPublic } = require('./generated/public');
const prismaPublic = new PrismaClientPublic({
    datasources: { db: { url: process.env.DATABASE_URL_PUBLIC } }
});

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

        const checkoutTime = new Date();
        const duracao = Math.round((checkoutTime - new Date(atendimento.checkin)) / 60000);

        const [mesa, atendimentoFechado] = await prisma.$transaction([
            prisma.mesa.update({
                where: { mesa_id },
                data: { status: 'available' }
            }),
            prisma.atendimento.update({
                where: { atendimento_id: atendimento.atendimento_id },
                data: {
                    checkout: checkoutTime,
                    duracao: duracao < 1 ? 1 : duracao
                }
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

// ── PEDIDOS ATIVOS (cozinha) ──
app.get('/api/pedidos-ativos', async (req, res) => {
    try {
        const atendimentos = await prisma.atendimento.findMany({
            where: { checkout: null },
            include: {
                mesa: true,
                pedido: {
                    include: { prato: true },
                    orderBy: { pedido_id: 'asc' }
                }
            },
            orderBy: { checkin: 'asc' }
        });
        const resultado = atendimentos
            .filter(a => a.pedido.length > 0)
            .map(a => ({
                atendimento_id: a.atendimento_id,
                mesa_id: a.mesa_id,
                checkin: a.checkin,
                itens: a.pedido.map(p => ({
                    pedido_id: p.pedido_id,
                    nome: p.prato.nome,
                    quantidade: p.quantidade,
                    prato_id: p.prato_id
                }))
            }));
        res.json(resultado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar pedidos ativos' });
    }
});
app.put('/api/pratos/:id/disponibilidade', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { disponivel } = req.body;
        const prato = await prisma.prato.update({
            where: { prato_id: id },
            data: { disponivel }
        });
        res.json(prato);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar disponibilidade' });
    }
});

app.post('/api/pagamento', async (req, res) => {
    try {
        const { atendimento_id, forma, valor } = req.body;
        const pagamento = await prisma.pagamento.create({
            data: {
                forma,
                valor,
                data_pagamento: new Date(),
                atendimento_id
            }
        });
        res.json(pagamento);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao registrar pagamento' });
    }
});

// ── DASHBOARD KPIs ──
app.get('/api/dashboard', async (req, res) => {
    try {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const amanha = new Date(hoje);
        amanha.setDate(amanha.getDate() + 1);

        // Faturamento do dia (soma dos pagamentos de hoje)
        const pagamentos = await prisma.pagamento.findMany({
            where: { data_pagamento: { gte: hoje, lt: amanha } }
        });
        const faturamento = pagamentos.reduce((s, p) => s + Number(p.valor), 0);

        // Atendimentos do dia
        const atendimentosHoje = await prisma.atendimento.findMany({
            where: { checkin: { gte: hoje, lt: amanha } },
            include: {
                pedido: { include: { prato: true } }
            }
        });
        const clientesAtendidos = atendimentosHoje.reduce((s, a) => s + a.n_pessoas, 0);

        // Ticket médio
        const ticketMedio = atendimentosHoje.length > 0
            ? faturamento / atendimentosHoje.length
            : 0;

        // Ocupação atual
        const todasMesas = await prisma.mesa.findMany();
        const ocupadas   = todasMesas.filter(m => m.status === 'occupied').length;
        const ocupacao   = {
            pct:     todasMesas.length > 0 ? Math.round((ocupadas / todasMesas.length) * 100) : 0,
            ocupadas,
            total:   todasMesas.length
        };

        // Top pratos do dia
        const contagem = {};
        atendimentosHoje.forEach(a => {
            a.pedido.forEach(p => {
                if (!contagem[p.prato_id]) contagem[p.prato_id] = { prato_id: p.prato_id, nome: p.prato.nome, emoji: p.prato.emoji || '🍽️', quantidade: 0 };
                contagem[p.prato_id].quantidade += p.quantidade;
            });
        });
        const topPratos = Object.values(contagem)
            .sort((a, b) => b.quantidade - a.quantidade)
            .slice(0, 5);

        // Atividade recente — checkins e checkouts do dia
        const atividade = [];
        atendimentosHoje.forEach(a => {
            atividade.push({ tipo: 'checkin', mesa: a.mesa_id, pessoas: a.n_pessoas, hora: a.checkin });
            if (a.checkout) {
                const total = a.pedido.reduce((s, p) => s + Number(p.prato.preco) * p.quantidade, 0);
                atividade.push({ tipo: 'checkout', mesa: a.mesa_id, total, hora: a.checkout });
            }
        });
        atividade.sort((a, b) => new Date(b.hora) - new Date(a.hora));

        res.json({ faturamento, clientesAtendidos, ticketMedio, ocupacao, topPratos, atividade: atividade.slice(0, 8) });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dashboard' });
    }
});

// ── FATURAMENTO - ÚLTIMOS 7 DIAS ──
app.get('/api/dashboard/faturamento-7dias', async (req, res) => {
    try {
        const dias = [];
        for (let i = 6; i >= 0; i--) {
            const data = new Date();
            data.setDate(data.getDate() - i);
            data.setHours(0, 0, 0, 0);
            
            const proximaData = new Date(data);
            proximaData.setDate(proximaData.getDate() + 1);
            
            const pagamentos = await prisma.pagamento.findMany({
                where: { data_pagamento: { gte: data, lt: proximaData } }
            });
            const valor = pagamentos.reduce((s, p) => s + Number(p.valor), 0);
            
            const nomesDia = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
            dias.push({
                dia: nomesDia[data.getDay()],
                valor: Math.round(valor)
            });
        }
        res.json(dias);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar faturamento' });
    }
});

// ── VENDAS POR CATEGORIA ──
app.get('/api/dashboard/vendas-categoria', async (req, res) => {
    try {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const amanha = new Date(hoje);
        amanha.setDate(amanha.getDate() + 1);

        // Obter todos os pedidos de hoje com detalhes dos pratos
        const atendimentos = await prisma.atendimento.findMany({
            where: { checkin: { gte: hoje, lt: amanha } },
            include: {
                pedido: { include: { prato: true } }
            }
        });

        // Contar vendas por categoria
        // ✅ Adicionar esta linha ANTES do const categorias = {}
        const CATEGORIAS = ['Entradas', 'Pratos', 'Bebidas', 'Sobremesas'];
        categorias = {};
        let totalVendas = 0;

        atendimentos.forEach(a => {
            a.pedido.forEach(p => {
                const cat = p.prato.categoria || 'Outros';
                if (!categorias[cat]) {
                    categorias[cat] = 0;
                }
                categorias[cat] += Number(p.prato.preco) * p.quantidade;
                totalVendas += Number(p.prato.preco) * p.quantidade;
            });
        });

        // Converter para array e calcular percentuais
        const resultado = Object.entries(categorias)
            .map(([categoria, valor]) => ({
                categoria,
                valor: Math.round(valor * 100) / 100,
                percentual: totalVendas > 0 ? Math.round((valor / totalVendas) * 100) : 0
            }))
            .sort((a, b) => b.valor - a.valor);

        res.json({
            total: Math.round(totalVendas * 100) / 100,
            categorias: resultado
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar vendas por categoria' });
    }
});

// ── AUDIT PEDIDOS (admin) ──
app.get('/api/audit/pedidos', async (req, res) => {
    try {
        const { de, ate } = req.query;
        const where = {};
        if (de && ate) {
            const inicio = new Date(de);
            const fim    = new Date(ate);
            fim.setHours(23, 59, 59, 999);
            where.checkin = { gte: inicio, lte: fim };
        }
        const atendimentos = await prisma.atendimento.findMany({
            where,
            include: {
                pedido:     { include: { prato: true }, orderBy: { pedido_id: 'asc' } },
                funcionario: true
            },
            orderBy: { checkin: 'desc' },
            take: 100
        });
        const resultado = atendimentos.map(a => {
            const total = a.pedido.reduce((s, p) => s + Number(p.prato.preco) * p.quantidade, 0);
            return {
                atendimento_id: a.atendimento_id,
                mesa:           a.mesa_id,
                checkin:        a.checkin,
                checkout:       a.checkout,
                n_pessoas:      a.n_pessoas,
                responsavel:    a.funcionario?.nome || '—',
                total,
                itens: a.pedido.map(p => ({
                    nome:       p.prato.nome,
                    quantidade: p.quantidade,
                    subtotal:   Number(p.prato.preco) * p.quantidade
                }))
            };
        });
        res.json(resultado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar audit de pedidos' });
    }
});

// ── AUDIT MESAS (admin) ──
app.get('/api/audit/mesas', async (req, res) => {
    try {
        const { de, ate } = req.query;
        const where = {};
        if (de && ate) {
            const inicio = new Date(de);
            const fim    = new Date(ate);
            fim.setHours(23, 59, 59, 999);
            where.checkin = { gte: inicio, lte: fim };
        }
        const atendimentos = await prisma.atendimento.findMany({
            where,
            include: { funcionario: true },
            orderBy: { checkin: 'desc' },
            take: 200
        });
        const eventos = [];
        atendimentos.forEach(a => {
            eventos.push({
                evento:      'checkin',
                mesa:        a.mesa_id,
                pessoas:     a.n_pessoas,
                responsavel: a.funcionario?.nome || '—',
                hora:        a.checkin
            });
            if (a.checkout) {
                eventos.push({
                    evento:      'checkout',
                    mesa:        a.mesa_id,
                    pessoas:     a.n_pessoas,
                    responsavel: a.funcionario?.nome || '—',
                    hora:        a.checkout
                });
            }
        });
        eventos.sort((a, b) => new Date(b.hora) - new Date(a.hora));
        res.json(eventos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar audit de mesas' });
    }
});

const PORT = 4000;

const server = app.listen(PORT, () => {
    console.log(`Servidor privado rodando em http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Porta ${PORT} ocupada. Rode: kill $(lsof -ti:${PORT})`);
        process.exit(1);
    }
    console.error('Erro ao iniciar servidor:', err);
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.error('Erro não capturado:', err);
});

process.on('unhandledRejection', (err) => {
    console.error('Promise rejeitada:', err);
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT',  () => server.close(() => process.exit(0)));