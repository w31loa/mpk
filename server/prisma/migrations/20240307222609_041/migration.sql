-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_serviceId_fkey";

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "serviceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
