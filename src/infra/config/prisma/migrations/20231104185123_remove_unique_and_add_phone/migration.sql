/*
  Warnings:

  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_name_key` ON `users`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `phone` VARCHAR(191) NOT NULL;
