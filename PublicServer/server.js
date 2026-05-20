require('dotenv').config();
const bcrypt = require("bcrypt");

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { PrismaClient: PrismaClientPrivate } = require('./generated/private');
const prismaPrivate = new PrismaClientPrivate();

// banco fake (temporário)
const usuarios = [];
const reservas = [];

const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "src")));

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

app.post("/fila", async (req, res) => {
  const { pessoas, email } = req.body;

  try {
    const cliente = await prisma.cliente.findUnique({
      where: { email }
    });

    if (!cliente) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    await prisma.fila.create({
      data: {
        numero_pessoas: parseInt(pessoas),
        id_cliente: cliente.id_cliente
      }
    });
    console.log(`[POST /fila] Cliente entrou na fila: ${email} com ${pessoas} pessoas.`);

    res.json({ mensagem: "Entrou na fila com sucesso!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao entrar na fila" });
  }
});

app.delete("/fila/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const cliente = await prisma.cliente.findUnique({
      where: { email }
    });

    if (!cliente) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const deleteResult = await prisma.fila.deleteMany({
      where: {
        id_cliente: cliente.id_cliente
      }
    });
    console.log(`[DELETE /fila] Cliente saiu da fila: ${email}. Registros deletados: ${deleteResult.count}`);

    res.json({ mensagem: "Saiu da fila com sucesso" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao sair da fila" });
  }
});

app.get("/tempo-espera", async (req, res) => {
  try {
    // 1. Consultar todas as filas (sem filtrar as ocupadas, por enquanto)
    let filas = await prisma.fila.findMany({
      where: { status: "esperando" }
    });

    // Removido o mock que injetava dados fictícios quando a fila estava vazia.
    // Isso causava confusão, pois a fila nunca ficava com "0" mesas.

    // 2. Somar o total de pessoas na fila
    const totalPessoas = filas.reduce((acc, fila) => acc + fila.numero_pessoas, 0);

    // 3. Chamar a API de previsão para cada pessoa e calcular a média
    const modelApiUrl = process.env.MODEL_API_URL || "http://localhost:5000/predict";
    let somaTempoIa = 0;

    for (const fila of filas) {
      // Formatar a data para o formato esperado pelo modelo
      // Fila tem data_entrada, caso não tenha usa o tempo atual fallback
      const dataEntrada = fila.data_entrada ? new Date(fila.data_entrada) : new Date();
      const checkInTime = dataEntrada.toISOString().slice(0, 19).replace("T", " ");

      const requestBody = {
        Num_Pessoas: fila.numero_pessoas,
        Check_in: checkInTime
      };

      try {
        const response = await fetch(modelApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          throw new Error(`Erro na API do modelo: ${response.status}`);
        }

        const data = await response.json();
        somaTempoIa += data.tempo_espera_min;
      } catch (e) {
        console.error("Erro na predição: ", e.message);
        // Fallback básico caso a API esteja fora
        somaTempoIa += fila.numero_pessoas * 5;
      }
    }

    const tempoMedioIa = filas.length > 0 ? (somaTempoIa / filas.length) : 0;

    // 4. Retornar o tempo calculado ao cliente
    res.json({
      fila_tamanho: filas.length,
      pessoas_na_fila: totalPessoas,
      tempo_estimado_minutos: tempoMedioIa
    });

  } catch (err) {
    console.error("Erro ao calcular tempo de espera:", err.message);
    res.status(500).json({ mensagem: "Não foi possível calcular o tempo de espera no momento." });
  }
});

// Endpoints for Dashboard (Public + Private DB)
app.get("/api/todas-filas", async (req, res) => {
  try {
    const filas = await prisma.fila.findMany({
      include: { Cliente: true },
      orderBy: { data_entrada: 'asc' }
    });
    res.json(filas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao buscar filas" });
  }
});

app.get("/api/todas-reservas", async (req, res) => {
  try {
    const reservas = await prisma.reserva.findMany({
      include: { Cliente: true },
      orderBy: { data_reserva: 'asc' }
    });
    res.json(reservas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao buscar reservas" });
  }
});

app.get("/api/atendimentos-privados", async (req, res) => {
  try {
    const atendimentos = await prismaPrivate.atendimento.findMany({
      include: { funcionario: true },
      orderBy: { checkin: 'desc' },
      take: 20
    });
    res.json(atendimentos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro ao buscar atendimentos da base privada" });
  }
});