-- CreateTable
CREATE TABLE "Construction" (
    "id" SERIAL NOT NULL,
    "previewId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Construction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConstructionImage" (
    "id" SERIAL NOT NULL,
    "imageId" INTEGER NOT NULL,
    "constructionId" INTEGER NOT NULL,

    CONSTRAINT "ConstructionImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Construction_id_key" ON "Construction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Construction_previewId_key" ON "Construction"("previewId");

-- CreateIndex
CREATE UNIQUE INDEX "ConstructionImage_id_key" ON "ConstructionImage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ConstructionImage_imageId_key" ON "ConstructionImage"("imageId");

-- AddForeignKey
ALTER TABLE "Construction" ADD CONSTRAINT "Construction_previewId_fkey" FOREIGN KEY ("previewId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConstructionImage" ADD CONSTRAINT "ConstructionImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConstructionImage" ADD CONSTRAINT "ConstructionImage_constructionId_fkey" FOREIGN KEY ("constructionId") REFERENCES "Construction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
