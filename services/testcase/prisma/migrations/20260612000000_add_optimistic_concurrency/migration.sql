-- Expand-only migration: optimistic-concurrency version columns.
-- Updates use compare-and-swap on (id, version); conflicts surface as HTTP 409.

ALTER TABLE "Suite" ADD COLUMN "version" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "Section" ADD COLUMN "version" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "TestCase" ADD COLUMN "version" INTEGER NOT NULL DEFAULT 1;
