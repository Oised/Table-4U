-- CreateTable
CREATE TABLE "adm" (
    "adm_id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "adm_pkey" PRIMARY KEY ("adm_id")
);

-- CreateTable
CREATE TABLE "atendimento" (
    "atendimento_id" SERIAL NOT NULL,
    "n_pessoas" INTEGER NOT NULL,
    "duracao" INTEGER,
    "checkin" TIMESTAMP(6) NOT NULL,
    "checkout" TIMESTAMP(6),
    "funcionario_id" INTEGER NOT NULL,
    "mesa_id" INTEGER,

    CONSTRAINT "atendimento_pkey" PRIMARY KEY ("atendimento_id")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "funcionario_id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" TEXT NOT NULL,
    "adm_id" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("funcionario_id")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "pagamento_id" SERIAL NOT NULL,
    "forma" VARCHAR(50) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "data_pagamento" TIMESTAMP(6) NOT NULL,
    "atendimento_id" INTEGER NOT NULL,

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("pagamento_id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "pedido_id" SERIAL NOT NULL,
    "prato_id" INTEGER NOT NULL,
    "atendimento_id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("pedido_id")
);

-- CreateTable
CREATE TABLE "prato" (
    "prato_id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "custo" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "prato_pkey" PRIMARY KEY ("prato_id")
);

-- CreateTable
CREATE TABLE "pratos_do_dia" (
    "prato_id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "dia" DATE NOT NULL,

    CONSTRAINT "pratos_do_dia_pkey" PRIMARY KEY ("prato_id","dia")
);

-- CreateTable
CREATE TABLE "tempo" (
    "prato_id" INTEGER NOT NULL,
    "tempo_preparo" INTEGER NOT NULL,

    CONSTRAINT "tempo_pkey" PRIMARY KEY ("prato_id")
);

-- CreateTable
CREATE TABLE "mesa" (
    "mesa_id" SERIAL NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'available',

    CONSTRAINT "mesa_pkey" PRIMARY KEY ("mesa_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adm_email_key" ON "adm"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");

-- AddForeignKey
ALTER TABLE "atendimento" ADD CONSTRAINT "atendimento_funcionario_id_fkey" FOREIGN KEY ("funcionario_id") REFERENCES "funcionario"("funcionario_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "atendimento" ADD CONSTRAINT "atendimento_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "mesa"("mesa_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "funcionario_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "adm"("adm_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_atendimento_id_fkey" FOREIGN KEY ("atendimento_id") REFERENCES "atendimento"("atendimento_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_atendimento_id_fkey" FOREIGN KEY ("atendimento_id") REFERENCES "atendimento"("atendimento_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_prato_id_fkey" FOREIGN KEY ("prato_id") REFERENCES "prato"("prato_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pratos_do_dia" ADD CONSTRAINT "pratos_do_dia_prato_id_fkey" FOREIGN KEY ("prato_id") REFERENCES "prato"("prato_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tempo" ADD CONSTRAINT "tempo_prato_id_fkey" FOREIGN KEY ("prato_id") REFERENCES "prato"("prato_id") ON DELETE CASCADE ON UPDATE NO ACTION;
