/*
  Warnings:

  - The primary key for the `Codeudor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Codeudor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Codeudor" DROP CONSTRAINT "Codeudor_pkey",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "nombre" DROP NOT NULL,
ADD CONSTRAINT "Codeudor_pkey" PRIMARY KEY ("id");
