const bcrypt = require("bcrypt");

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

  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }

  console.log("Login OK:", email);

  res.json({ 
    mensagem: "Login OK",
    user: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    }
  });
});

app.post("/reserva", (req, res) => {
  const { pessoas, data, horario, nome, email } = req.body;

  const novaReserva = {
    id: Date.now(),
    nome,
    email,
    pessoas,
    data,
    horario
  };

  reservas.push(novaReserva);

  console.log("Reserva salva:", novaReserva);

  res.json({ mensagem: "Reserva salva!", reserva: novaReserva });
});

app.get("/reservas/:email", (req, res) => {
  const { email } = req.params;

  const minhasReservas = reservas.filter(r => r.email === email);

  res.json(minhasReservas);
});

app.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;

  // verifica se já existe
  const existe = usuarios.find(u => u.email === email);

  if (existe) {
    return res.status(400).json({ mensagem: "Email já cadastrado" });
  }

  try {
    const hash = await bcrypt.hash(senha, 10);

    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      senha: hash
    };

    usuarios.push(novoUsuario);

    console.log("Usuário cadastrado:", novoUsuario);

    res.status(201).json({ mensagem: "Usuário criado" });

  } catch (err) {
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});