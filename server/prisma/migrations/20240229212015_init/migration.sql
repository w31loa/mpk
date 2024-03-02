-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "productCategoryId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsInBasket" (
    "id" SERIAL NOT NULL,
    "basketId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "ProductsInBasket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Basket_userId_key" ON "Basket"("userId");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInBasket" ADD CONSTRAINT "ProductsInBasket_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInBasket" ADD CONSTRAINT "ProductsInBasket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
