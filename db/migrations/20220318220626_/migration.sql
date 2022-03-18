/*
  Warnings:

  - A unique constraint covering the columns `[secret]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_secret_idx";

-- CreateIndex
CREATE UNIQUE INDEX "User_secret_key" ON "User"("secret");
