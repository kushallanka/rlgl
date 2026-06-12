/**
 * Shared test database bootstrap for testrun-service tests.
 *
 * Uses a real SQLite file in a temp directory rather than `:memory:` —
 * Prisma's SQLite connector holds multiple connections, and a shared-cache
 * memory DB is not reliably visible across them (and fails outright on
 * Windows). Each suite gets its own isolated file, deleted on cleanup.
 *
 * DDL statements are executed one-by-one: $executeRawUnsafe only runs the
 * FIRST statement of a multi-statement string and silently drops the rest.
 */
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { PrismaClient } from '../../services/testrun/generated/client/index.js';

const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS Project (id INTEGER PRIMARY KEY, name TEXT DEFAULT '', deletedAt DATETIME, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP)`,
  `CREATE TABLE IF NOT EXISTS Suite (id INTEGER PRIMARY KEY AUTOINCREMENT, projectId INTEGER, name TEXT, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP)`,
  `CREATE TABLE IF NOT EXISTS TestRun (id INTEGER PRIMARY KEY AUTOINCREMENT, projectId INTEGER, suiteId INTEGER, name TEXT, description TEXT, createdBy TEXT, deletedAt DATETIME, version INTEGER DEFAULT 1, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP)`,
  `CREATE TABLE IF NOT EXISTS TestResult (id INTEGER PRIMARY KEY AUTOINCREMENT, testRunId INTEGER, testCaseId INTEGER, testCaseName TEXT, title TEXT, preconditions TEXT, steps TEXT, expectedResult TEXT, priority TEXT, type TEXT, snapshottedAt DATETIME, status TEXT DEFAULT 'Untested', comment TEXT, version INTEGER DEFAULT 1, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP)`,
];

export interface TestDb {
  prisma: PrismaClient;
  cleanup: () => Promise<void>;
}

export async function createTestRunDb(name: string): Promise<TestDb> {
  const dir = mkdtempSync(join(tmpdir(), `rlgl-${name}-`));
  const dbPath = join(dir, 'test.db').replace(/\\/g, '/');

  const prisma = new PrismaClient({
    datasources: { db: { url: `file:${dbPath}` } },
  });

  for (const ddl of DDL) {
    await prisma.$executeRawUnsafe(ddl);
  }

  return {
    prisma,
    cleanup: async () => {
      await prisma.$disconnect();
      try {
        rmSync(dir, { recursive: true, force: true });
      } catch {
        // Windows can hold the file briefly after disconnect; temp dir
        // cleanup is best-effort.
      }
    },
  };
}
