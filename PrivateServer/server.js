require('dotenv').config();

const { PrismaClient } = require('./generated/private');
const prisma = new PrismaClient();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());

app.listen(4000, () => {
  console.log('Servidor privado rodando em http://localhost:4000');
});
