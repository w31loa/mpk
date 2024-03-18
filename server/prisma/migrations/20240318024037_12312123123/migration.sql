-- DropForeignKey
ALTER TABLE "ProductsInBasket" DROP CONSTRAINT "ProductsInBasket_productId_fkey";

-- AddForeignKey
ALTER TABLE "ProductsInBasket" ADD CONSTRAINT "ProductsInBasket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
