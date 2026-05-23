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

// Atender fila (Remover da fila)
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

// Chamar cliente (Mudar status)
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

app.listen(4000, () => {
  console.log('Servidor privado rodando em http://localhost:4000');
});
