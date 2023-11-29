/*
  Warnings:

  - You are about to drop the column `idProceso` on the `Actuacion` table. All the data in the column will be lost.
  - You are about to drop the column `carpetaNumero` on the `Proceso` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[llaveProceso]` on the table `Carpeta` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_carpetaNumero_fkey";

-- AlterTable
ALTER TABLE "Actuacion" DROP COLUMN "idProceso";

-- AlterTable
ALTER TABLE "Proceso" DROP COLUMN "carpetaNumero";

-- CreateIndex
CREATE UNIQUE INDEX "Carpeta_llaveProceso_key" ON "Carpeta"("llaveProceso");

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_llaveProceso_fkey" FOREIGN KEY ("llaveProceso") REFERENCES "Carpeta"("llaveProceso") ON DELETE RESTRICT ON UPDATE CASCADE;
