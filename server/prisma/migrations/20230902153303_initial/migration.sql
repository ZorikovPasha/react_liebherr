-- CreateTable
CREATE TABLE "Machinery" (
    "id" SERIAL NOT NULL,
    "imageId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "liftingCapacity" TEXT NOT NULL,
    "arrowLength" TEXT NOT NULL,
    "mainArrowLength" TEXT NOT NULL,
    "maxHeight" TEXT NOT NULL,
    "maxRadius" TEXT NOT NULL,
    "speed" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Machinery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alternativeText" TEXT,
    "caption" TEXT,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "data" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Machinery_id_key" ON "Machinery"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Machinery_imageId_key" ON "Machinery"("imageId");

-- AddForeignKey
ALTER TABLE "Machinery" ADD CONSTRAINT "Machinery_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
