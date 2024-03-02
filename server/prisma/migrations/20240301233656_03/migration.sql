/*
  Warnings:

  - Added the required column `title` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "title" TEXT NOT NULL;
