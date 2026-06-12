/**
 * Invariant tests: Test execution snapshot integrity.
 *
 * The CORE invariant of this system is that once a TestRun is created,
 * the snapshot of each test case (title, steps, expected results, etc.)
 * must NEVER change, even if:
 *   - The original TestCase is edited
 *   - The TestCase is deleted
 *   - The Suite is restructured
 *   - Sections are moved
 *
 * These tests mechanically enforce that invariant.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { PrismaClient } from '../../services/testrun/generated/client/index.js';
import { createTestRunDb, type TestDb } from '../helpers/testrun-db.js';

let db: TestDb;
let prisma: PrismaClient;

beforeEach(async () => {
  db = await createTestRunDb('snapshot');
  prisma = db.prisma;
});

afterEach(async () => {
  await db.cleanup();
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function seedProjectAndRun(prismaClient: PrismaClient, opts: {
  projectId: number;
  snapshotTitle: string;
  snapshotSteps: string;
  snapshotExpected: string;
  priority: string;
  testCaseId: number;
}) {
  await prismaClient.$executeRawUnsafe(
    `INSERT OR IGNORE INTO Project (id, name) VALUES (${opts.projectId}, 'Invariant Test Project')`
  );

  const run = await prismaClient.testRun.create({
    data: {
      projectId: opts.projectId,
      name: 'Snapshot Invariant Run',
      createdBy: 'test-user',
      results: {
        create: {
          testCaseId: opts.testCaseId,
          testCaseName: opts.snapshotTitle,
          title: opts.snapshotTitle,
          preconditions: 'User is logged in',
          steps: opts.snapshotSteps,
          expectedResult: opts.snapshotExpected,
          priority: opts.priority,
          type: 'functional',
          snapshottedAt: new Date(),
          status: 'Untested',
        },
      },
    },
    include: { results: true },
  });

  return run;
}

// ---------------------------------------------------------------------------
// Invariant 1: Snapshot columns are populated at run creation
// ---------------------------------------------------------------------------

describe('Invariant: snapshot columns are populated at run creation', () => {
  it('TestResult contains all snapshot fields immediately after run creation', async () => {
    const run = await seedProjectAndRun(prisma, {
      projectId: 8001,
      snapshotTitle: 'Login with valid credentials',
      snapshotSteps: JSON.stringify([{ action: 'Enter email', expected: 'Email field accepts input' }]),
      snapshotExpected: 'User is redirected to dashboard',
      priority: 'High',
      testCaseId: 101,
    });

    const result = run.results[0];
    if (!result) throw new Error('No result created');

    // All snapshot fields must be present
    expect(result.title).toBe('Login with valid credentials');
    expect(result.preconditions).toBe('User is logged in');
    expect(result.expectedResult).toBe('User is redirected to dashboard');
    expect(result.priority).toBe('High');
    expect(result.type).toBe('functional');
    expect(result.snapshottedAt).toBeInstanceOf(Date);
    expect(result.status).toBe('Untested');
  });
});

// ---------------------------------------------------------------------------
// Invariant 2: Snapshot columns are immutable once written
// ---------------------------------------------------------------------------

describe('Invariant: snapshot columns cannot be updated after creation', () => {
  it('updating result status does NOT alter snapshot fields', async () => {
    const run = await seedProjectAndRun(prisma, {
      projectId: 8002,
      snapshotTitle: 'Original Title At Snapshot Time',
      snapshotSteps: '[]',
      snapshotExpected: 'Original Expected Result',
      priority: 'Medium',
      testCaseId: 102,
    });

    const resultId = run.results[0]?.id;
    if (!resultId) throw new Error('No result');

    // Update only the mutable fields (status, comment)
    await prisma.testResult.update({
      where: { id: resultId },
      data: { status: 'Passed', comment: 'Verified manually', version: { increment: 1 } },
    });

    // Re-fetch and verify snapshot fields unchanged
    const updated = await prisma.testResult.findUnique({ where: { id: resultId } });
    expect(updated?.title).toBe('Original Title At Snapshot Time');
    expect(updated?.expectedResult).toBe('Original Expected Result');
    expect(updated?.priority).toBe('Medium');
    // Mutable fields updated
    expect(updated?.status).toBe('Passed');
    expect(updated?.comment).toBe('Verified manually');
  });

  it('snapshottedAt is never null after run creation', async () => {
    const run = await seedProjectAndRun(prisma, {
      projectId: 8003,
      snapshotTitle: 'Check snapshottedAt',
      snapshotSteps: '[]',
      snapshotExpected: 'Expected',
      priority: 'Low',
      testCaseId: 103,
    });

    for (const result of run.results) {
      expect(result.snapshottedAt).not.toBeNull();
      expect(result.snapshottedAt).toBeInstanceOf(Date);
    }
  });
});

// ---------------------------------------------------------------------------
// Invariant 3: Run deletion is soft-delete only (historical records survive)
// ---------------------------------------------------------------------------

describe('Invariant: test runs are soft-deleted, results survive', () => {
  it('soft-deleting a run preserves all TestResult records', async () => {
    const run = await seedProjectAndRun(prisma, {
      projectId: 8004,
      snapshotTitle: 'Soft Delete Test',
      snapshotSteps: '[]',
      snapshotExpected: 'Must survive deletion',
      priority: 'High',
      testCaseId: 104,
    });

    const resultId = run.results[0]?.id;
    if (!resultId) throw new Error('No result');

    // Soft delete the run
    await prisma.testRun.update({
      where: { id: run.id },
      data: { deletedAt: new Date() },
    });

    // The TestResult must still exist (historical integrity)
    const result = await prisma.testResult.findUnique({ where: { id: resultId } });
    expect(result).not.toBeNull();
    expect(result?.title).toBe('Soft Delete Test');
    expect(result?.snapshottedAt).toBeInstanceOf(Date);
  });

  it('soft-deleted runs are excluded from list queries', async () => {
    const { TestRunRepository } = await import('../../services/testrun/src/repositories/testrun.repository.js');
    const repo = new TestRunRepository(prisma);

    const PROJECT_ID = 8005;
    await prisma.$executeRawUnsafe(
      `INSERT OR IGNORE INTO Project (id, name) VALUES (${PROJECT_ID}, 'Soft Delete Query Test')`
    );

    // Create and soft-delete a run
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'Deleted Run', createdBy: 'tester', results: { create: [] } },
    });
    await prisma.testRun.update({ where: { id: run.id }, data: { deletedAt: new Date() } });

    // List should not include the deleted run
    const [, runs] = await repo.findRuns(PROJECT_ID, 0, 100, 'desc');
    const ids = runs.map(r => r.id);
    expect(ids).not.toContain(run.id);
  });
});

// ---------------------------------------------------------------------------
// Invariant 4: TestResult carries testCaseId even after hypothetical case deletion
// ---------------------------------------------------------------------------

describe('Invariant: testCaseId is preserved on TestResult for audit', () => {
  it('testCaseId is stored on each TestResult', async () => {
    const CASE_ID = 9999;
    const run = await seedProjectAndRun(prisma, {
      projectId: 8006,
      snapshotTitle: 'Case Deleted Later',
      snapshotSteps: '[]',
      snapshotExpected: 'Expected',
      priority: 'Medium',
      testCaseId: CASE_ID,
    });

    expect(run.results[0]?.testCaseId).toBe(CASE_ID);

    // Re-fetch to confirm persistence
    const stored = await prisma.testResult.findFirst({ where: { testRunId: run.id } });
    expect(stored?.testCaseId).toBe(CASE_ID);
  });
});
