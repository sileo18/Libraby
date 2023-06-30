-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "quantity" INTEGER DEFAULT 0
);
INSERT INTO "new_Book" ("author", "company", "id", "quantity", "title") SELECT "author", "company", "id", "quantity", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
