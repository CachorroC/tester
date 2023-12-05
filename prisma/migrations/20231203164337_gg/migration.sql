/*
  Warnings:

  - The primary key for the `Codeudor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Codeudor` table. All the data in the column will be lost.
  - Made the column `nombre` on table `Codeudor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Codeudor" DROP CONSTRAINT "Codeudor_pkey",
DROP COLUMN "id",
ALTER COLUMN "nombre" SET NOT NULL,
ADD CONSTRAINT "Codeudor_pkey" PRIMARY KEY ("nombre");
