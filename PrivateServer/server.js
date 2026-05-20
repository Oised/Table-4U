require('dotenv').config();

const { PrismaClient } = require('./generated/private');
const prisma = new PrismaClient();

const { PrismaClient: PrismaClientPublic } = require('./generated/public');
const prismaPublic = new PrismaClientPublic();

const express = require('express');
const app = express();
const path = require('path');

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

// Funcionários do Banco Privado
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
        const { nome, email } = req.body;
        
        // Garante que exista pelo menos um admin
        let admin = await prisma.adm.findFirst();
        if (!admin) {
            admin = await prisma.adm.create({
                data: { nome: 'Admin Default', email: 'admin@table4u.com', senha: '123' }
            });
        }

        const func = await prisma.funcionario.create({
            data: {
                nome,
                email,
                senha: '123', // Senha padrão
                adm_id: admin.adm_id
            }
        });
        res.json(func);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar funcionário' });
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
