const express = require("express");
const { PrismaClient } = require("../generated/private");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

/**
 * Criar funcionário
 */
app.post("/test/funcionario", async (req, res) => {
  try {
    const { nome, email, senha, adm_id } = req.body;

    const novo = await prisma.funcionario.create({
      data: { nome, email, senha, adm_id }
    });

    res.json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: err.message });
  }
});

/**
 * Deletar funcionário
 */
app.delete("/test/funcionario/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const deletado = await prisma.funcionario.delete({
      where: { funcionario_id: id }
    });

    res.json(deletado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: err.message });
  }
});

app.listen(4000, () => {
  console.log("TestDB rodando na porta 4000");
});