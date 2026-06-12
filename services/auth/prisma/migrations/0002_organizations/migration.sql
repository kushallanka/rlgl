-- Migration: Add Organization multi-tenancy model (expand-only, no destructive ops)
-- Expand-contract: all new columns are nullable or have defaults; no existing columns dropped.
-- IF NOT EXISTS everywhere: this migration once failed partway (see ALTER note below),
-- so it must be safely re-runnable over a partially-applied database.

-- ─── Organization ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "Organization" (
    "id"        INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name"      TEXT         NOT NULL,
    "slug"      TEXT         NOT NULL,
    "plan"      TEXT         NOT NULL DEFAULT 'free',
    "version"   INTEGER      NOT NULL DEFAULT 1,
    "createdAt" DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME
);

CREATE UNIQUE INDEX IF NOT EXISTS "Organization_slug_key" ON "Organization"("slug");

-- ─── OrganizationMember ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "OrganizationMember" (
    "id"          INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orgId"       INTEGER  NOT NULL,
    "userId"      INTEGER  NOT NULL,
    "role"        TEXT     NOT NULL DEFAULT 'member',
    "invitedAt"   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acceptedAt"  DATETIME,
    CONSTRAINT "OrganizationMember_orgId_fkey"  FOREIGN KEY ("orgId")  REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrganizationMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id")         ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "OrganizationMember_orgId_userId_key" ON "OrganizationMember"("orgId", "userId");
CREATE INDEX IF NOT EXISTS "OrganizationMember_userId_idx" ON "OrganizationMember"("userId");

-- ─── OrgAuditLog (append-only) ────────────────────────────────────────────────
-- GOVERNANCE: No UPDATE or DELETE allowed on this table. Application-layer enforced.
CREATE TABLE IF NOT EXISTS "OrgAuditLog" (
    "id"         INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orgId"      INTEGER  NOT NULL,
    "actorId"    INTEGER,
    "action"     TEXT     NOT NULL,
    "targetType" TEXT,
    "targetId"   TEXT,
    "metadata"   TEXT,
    "createdAt"  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OrgAuditLog_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "OrgAuditLog_orgId_idx"   ON "OrgAuditLog"("orgId");
CREATE INDEX IF NOT EXISTS "OrgAuditLog_actorId_idx" ON "OrgAuditLog"("actorId");
CREATE INDEX IF NOT EXISTS "OrgAuditLog_action_idx"  ON "OrgAuditLog"("action");

-- ─── User.updatedAt backfill ──────────────────────────────────────────────────
-- SQLite forbids ADD COLUMN with a non-constant default (CURRENT_TIMESTAMP),
-- so add the column without a default, then backfill in a second statement.
-- Prisma's @updatedAt maintains the value on every create/update from here on.
ALTER TABLE "User" ADD COLUMN "updatedAt" DATETIME;
UPDATE "User" SET "updatedAt" = CURRENT_TIMESTAMP WHERE "updatedAt" IS NULL;
