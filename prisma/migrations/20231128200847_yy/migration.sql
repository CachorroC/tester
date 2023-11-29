-- DropForeignKey
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_despacho_fkey";

-- CreateTable
CREATE TABLE "_ProcesoToJuzgado" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProcesoToJuzgado_AB_unique" ON "_ProcesoToJuzgado"("A", "B");

-- CreateIndex
CREATE INDEX "_ProcesoToJuzgado_B_index" ON "_ProcesoToJuzgado"("B");

-- AddForeignKey
ALTER TABLE "_ProcesoToJuzgado" ADD CONSTRAINT "_ProcesoToJuzgado_A_fkey" FOREIGN KEY ("A") REFERENCES "Juzgado"("tipo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProcesoToJuzgado" ADD CONSTRAINT "_ProcesoToJuzgado_B_fkey" FOREIGN KEY ("B") REFERENCES "Proceso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
