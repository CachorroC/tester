/*
  Warnings:

  - You are about to drop the column `extraContent` on the `Nota` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Nota" DROP COLUMN "extraContent",
ADD COLUMN     "content" TEXT[];
