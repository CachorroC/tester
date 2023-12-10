/*
  Warnings:

  - You are about to drop the column `juzgadoTipo` on the `Demanda` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Demanda" DROP CONSTRAINT "Demanda_juzgadoTipo_fkey";

-- AlterTable
ALTER TABLE "Demanda" DROP COLUMN "juzgadoTipo";
