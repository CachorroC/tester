/*
  Warnings:

  - You are about to drop the `JuzgadoCarpeta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JuzgadoCarpeta" DROP CONSTRAINT "JuzgadoCarpeta_carpetaNumero_fkey";

-- DropForeignKey
ALTER TABLE "JuzgadoCarpeta" DROP CONSTRAINT "JuzgadoCarpeta_despachoTipo_fkey";

-- DropTable
DROP TABLE "JuzgadoCarpeta";

-- CreateTable
CREATE TABLE "_CarpetaToJuzgado" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarpetaToJuzgado_AB_unique" ON "_CarpetaToJuzgado"("A", "B");

-- CreateIndex
CREATE INDEX "_CarpetaToJuzgado_B_index" ON "_CarpetaToJuzgado"("B");

-- AddForeignKey
ALTER TABLE "_CarpetaToJuzgado" ADD CONSTRAINT "_CarpetaToJuzgado_A_fkey" FOREIGN KEY ("A") REFERENCES "Carpeta"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarpetaToJuzgado" ADD CONSTRAINT "_CarpetaToJuzgado_B_fkey" FOREIGN KEY ("B") REFERENCES "Juzgado"("tipo") ON DELETE CASCADE ON UPDATE CASCADE;
