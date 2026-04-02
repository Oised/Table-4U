const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const dados = await prisma.adm.findMany(); // ou outra tabela
  console.log(dados);
}

main();