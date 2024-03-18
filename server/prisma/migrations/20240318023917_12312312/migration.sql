-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_productCategoryId_fkey";

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServiceCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
