-- CreateTable
CREATE TABLE "Upload" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Upload_title_key" ON "Upload"("title");
