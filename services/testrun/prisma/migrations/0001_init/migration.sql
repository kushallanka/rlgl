CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "deletedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Suite" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "projectId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "TestRun" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "suiteId" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdBy" TEXT,
    "deletedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TestRun_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TestRun_suiteId_fkey" FOREIGN KEY ("suiteId") REFERENCES "Suite" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "TestResult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "testRunId" INTEGER NOT NULL,
    "testCaseId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Untested',
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TestResult_testRunId_fkey" FOREIGN KEY ("testRunId") REFERENCES "TestRun" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "IdempotencyKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "TestRun_projectId_idx" ON "TestRun"("projectId");
CREATE INDEX "TestRun_suiteId_idx" ON "TestRun"("suiteId");
CREATE UNIQUE INDEX "IdempotencyKey_key_service_key" ON "IdempotencyKey"("key", "service");

CREATE VIEW "testrun_hierarchy_check" AS
SELECT
    tr.id as testrun_id,
    tr.name as testrun_name,
    tr.projectId as testrun_project_id,
    p.id as project_exists,
    CASE
        WHEN p.id IS NULL THEN 'INCONSISTENT'
        ELSE 'CONSISTENT'
    END as consistency_status,
    tr.deletedAt as is_deleted
FROM "TestRun" tr
LEFT JOIN "Project" p ON tr.projectId = p.id;
