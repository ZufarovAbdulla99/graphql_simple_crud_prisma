-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);
