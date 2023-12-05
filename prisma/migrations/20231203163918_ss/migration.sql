/*
  Warnings:

  - A unique constraint covering the columns `[cedula]` on the table `Deudor` will be added. If there are existing duplicate values, this will fail.
  - Made the column `cedula` on table `Deudor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Deudor" ALTER COLUMN "cedula" SET NOT NULL;

-- CreateTable
CREATE TABLE "Codeudor" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT,
    "direccion" TEXT,
    "nombre" TEXT,
    "telefono" TEXT,
    "carpetaNumero" INTEGER NOT NULL,

    CONSTRAINT "Codeudor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Codeudor_carpetaNumero_key" ON "Codeudor"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "Deudor_cedula_key" ON "Deudor"("cedula");

-- AddForeignKey
ALTER TABLE "Codeudor" ADD CONSTRAINT "Codeudor_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
