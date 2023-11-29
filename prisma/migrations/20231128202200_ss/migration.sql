/*
  Warnings:

  - Made the column `idProceso` on table `Actuacion` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Actuacion" DROP CONSTRAINT "Actuacion_idProceso_fkey";

-- AlterTable
ALTER TABLE "Actuacion" ADD COLUMN     "procesoId" INTEGER,
ALTER COLUMN "idProceso" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_procesoId_fkey" FOREIGN KEY ("procesoId") REFERENCES "Proceso"("idProceso") ON DELETE SET NULL ON UPDATE CASCADE;
