-- DropForeignKey
ALTER TABLE "Carpeta" DROP CONSTRAINT "Carpeta_demandaId_fkey";

-- DropForeignKey
ALTER TABLE "Carpeta" DROP CONSTRAINT "Carpeta_deudorCedula_fkey";

-- AlterTable
ALTER TABLE "Carpeta" ALTER COLUMN "demandaId" DROP NOT NULL,
ALTER COLUMN "deudorCedula" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Carpeta" ADD CONSTRAINT "Carpeta_deudorCedula_fkey" FOREIGN KEY ("deudorCedula") REFERENCES "Deudor"("cedula") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carpeta" ADD CONSTRAINT "Carpeta_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE SET NULL ON UPDATE CASCADE;
