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

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  console.log("Login recebido:", email, senha);

  res.json({ mensagem: "ok" });
});

app.post("/reserva", (req, res) => {
  const { pessoas, data, horario } = req.body;

  console.log("Reserva recebida:");
  console.log(pessoas, data, horario);

  res.json({ mensagem: "Reserva salva!" });
});