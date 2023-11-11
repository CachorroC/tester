/*
  Warnings:

  - You are about to drop the column `nombre` on the `Deudor` table. All the data in the column will be lost.
  - Added the required column `primerApellido` to the `Deudor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primerNombre` to the `Deudor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deudor" DROP COLUMN "nombre",
ADD COLUMN     "primerApellido" TEXT NOT NULL,
ADD COLUMN     "primerNombre" TEXT NOT NULL,
ADD COLUMN     "segundoApellido" TEXT,
ADD COLUMN     "segundoNombre" TEXT;
