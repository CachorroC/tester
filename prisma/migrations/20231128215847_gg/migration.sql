/*
  Warnings:

  - You are about to drop the column `procesoId` on the `Actuacion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Actuacion" DROP CONSTRAINT "Actuacion_procesoId_fkey";

-- AlterTable
ALTER TABLE "Actuacion" DROP COLUMN "procesoId",
ADD COLUMN     "idProceso" INTEGER;

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_idProceso_fkey" FOREIGN KEY ("idProceso") REFERENCES "Proceso"("idProceso") ON DELETE SET NULL ON UPDATE CASCADE;
