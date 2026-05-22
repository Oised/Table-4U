-- AlterTable
ALTER TABLE "prato" ADD COLUMN     "categoria" VARCHAR(50) NOT NULL DEFAULT 'Pratos',
ADD COLUMN     "descricao" VARCHAR(300),
ADD COLUMN     "disponivel" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "emoji" VARCHAR(10);
