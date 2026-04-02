const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const clientes = await prisma.cliente.findMany();
  console.log(clientes);
}

main();