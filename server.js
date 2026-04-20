require('dotenv').config();
const bcrypt = require("bcrypt");

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// banco fake (temporário)
const usuarios = [];
const reservas = [];

const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "PublicServer")));

app.use(express.json());

// teste inicial
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

app.post("/clientes", (req, res) => {
  const { nome } = req.body;

  console.log("Cliente recebido:", nome);

  res.json({ mensagem: "Cliente recebido com sucesso!" });
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const cliente = await prisma.cliente.findUnique({
    where: { email }
  });

  if (!cliente) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }

  const valid = await bcrypt.compare(senha, cliente.senha);

  if (!valid) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }

  res.json({
    user: {
      id: cliente.id_cliente,
      nome: cliente.nome,
      email: cliente.email
    }
  });
});

app.post("/reserva", async (req, res) => {
  const { pessoas, data, horario, email } = req.body;

  try {
    //  encontrar cliente pelo email
    const cliente = await prisma.cliente.findUnique({
      where: { email }
    });

    if (!cliente) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    // juntar data + horário
    const dataCompleta = new Date(`${data}T${horario}`);

    //  salvar no banco
    await prisma.reserva.create({
      data: {
        data_reserva: dataCompleta,
        numero_pessoas: parseInt(pessoas),
        id_cliente: cliente.id_cliente
      }
    });

    res.json({ mensagem: "Reserva criada com sucesso!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao criar reserva" });
  }
});

app.get("/reservas/:email", async (req, res) => {
  const { email } = req.params;

  const cliente = await prisma.cliente.findUnique({
    where: { email },
    include: {
      Reserva: true
    }
  });

  if (!cliente) {
    return res.json([]);
  }

  res.json(cliente.Reserva);
});

app.delete("/reserva/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.reserva.delete({
      where: {
        id_reserva: parseInt(id)
      }
    });

    res.json({ mensagem: "Reserva cancelada com sucesso" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao cancelar reserva" });
  }
});

app.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const hash = await bcrypt.hash(senha, 10);

    const cliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        senha: hash
      }
    });

    res.status(201).json(cliente);

  } catch (err) {
  console.error(err);

  if (err.code === 'P2002') {
    return res.status(400).json({ mensagem: "Email já cadastrado" });
  }

  res.status(500).json({ mensagem: "Erro no servidor" });
}
});