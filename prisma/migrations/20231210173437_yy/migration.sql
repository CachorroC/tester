/*
  Warnings:

  - You are about to drop the column `juzgadoTipo` on the `Proceso` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_juzgadoTipo_fkey";

-- AlterTable
ALTER TABLE "Proceso" DROP COLUMN "juzgadoTipo";
