-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "Fila" (
    "id_fila" SERIAL NOT NULL,
    "data_entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numero_pessoas" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'esperando',
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Fila_pkey" PRIMARY KEY ("id_fila")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id_reserva" SERIAL NOT NULL,
    "data_reserva" TIMESTAMP(3) NOT NULL,
    "numero_pessoas" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- AddForeignKey
ALTER TABLE "Fila" ADD CONSTRAINT "Fila_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;
