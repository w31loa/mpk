-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "basketId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_basketId_key" ON "Request"("basketId");

-- CreateIndex
CREATE UNIQUE INDEX "Request_serviceId_key" ON "Request"("serviceId");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
