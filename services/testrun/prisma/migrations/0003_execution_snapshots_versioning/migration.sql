-- Expand-only migration (expand-contract step 1):
-- 1. Immutable execution snapshot columns on TestResult so historical runs
--    no longer depend on live TestCase rows.
-- 2. Optimistic-concurrency version columns on TestRun and TestResult.
-- 3. Request hash + expiry on IdempotencyKey.
-- No columns are renamed or dropped.

ALTER TABLE "TestRun" ADD COLUMN "version" INTEGER NOT NULL DEFAULT 1;

ALTER TABLE "TestResult" ADD COLUMN "title" TEXT;
ALTER TABLE "TestResult" ADD COLUMN "preconditions" TEXT;
ALTER TABLE "TestResult" ADD COLUMN "steps" TEXT;
ALTER TABLE "TestResult" ADD COLUMN "expectedResult" TEXT;
ALTER TABLE "TestResult" ADD COLUMN "priority" TEXT;
ALTER TABLE "TestResult" ADD COLUMN "type" TEXT;
ALTER TABLE "TestResult" ADD COLUMN "snapshottedAt" DATETIME;
ALTER TABLE "TestResult" ADD COLUMN "version" INTEGER NOT NULL DEFAULT 1;

ALTER TABLE "IdempotencyKey" ADD COLUMN "requestHash" TEXT;
ALTER TABLE "IdempotencyKey" ADD COLUMN "expiresAt" DATETIME;

-- Backfill: title mirrors the already-snapshotted testCaseName for old rows.
UPDATE "TestResult" SET "title" = "testCaseName" WHERE "title" IS NULL;

CREATE INDEX IF NOT EXISTS "TestResult_testRunId_idx" ON "TestResult"("testRunId");
CREATE INDEX IF NOT EXISTS "TestResult_testCaseId_idx" ON "TestResult"("testCaseId");
