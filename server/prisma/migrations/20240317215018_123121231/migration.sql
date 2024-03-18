/*
  Warnings:

  - You are about to drop the column `description` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ServiceCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "ServiceCategory" DROP COLUMN "description";
