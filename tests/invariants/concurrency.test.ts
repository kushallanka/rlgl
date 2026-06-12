/**
 * Invariant tests: Optimistic concurrency control (CAS).
 *
 * Every mutable entity (TestRun, TestResult) uses a `version` column.
 * Updates must include the expected version. A mismatch must return null
 * (which the service translates to HTTP 409 VERSION_CONFLICT).
 *
 * These tests ensure the CAS invariant is mechanically enforced.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { PrismaClient } from '../../services/testrun/generated/client/index.js';
import { TestRunRepository } from '../../services/testrun/src/repositories/testrun.repository.js';
import { createTestRunDb, type TestDb } from '../helpers/testrun-db.js';

let db: TestDb;
let prisma: PrismaClient;
let repo: TestRunRepository;

const PROJECT_ID = 7001;

beforeEach(async () => {
  db = await createTestRunDb('concurrency');
  prisma = db.prisma;
  repo = new TestRunRepository(prisma);

  await prisma.$executeRawUnsafe(
    `INSERT OR IGNORE INTO Project (id, name) VALUES (${PROJECT_ID}, 'CAS Test Project')`
  );
});

afterEach(async () => {
  await db.cleanup();
});

// ---------------------------------------------------------------------------
// CAS invariant 1: Successful update increments version
// ---------------------------------------------------------------------------

describe('CAS: successful update increments version', () => {
  it('version increments from 1 → 2 on first update', async () => {
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'Version Increment Test', createdBy: 'tester', results: { create: [] } },
    });

    expect(run.version).toBe(1);

    const updated = await repo.updateRun(run.id, { name: 'Updated Name' }, 1);
    expect(updated).not.toBeNull();
    expect(updated!.version).toBe(2);
    expect(updated!.name).toBe('Updated Name');
  });

  it('version increments on each sequential update', async () => {
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'Sequential Updates', createdBy: 'tester', results: { create: [] } },
    });

    const v2 = await repo.updateRun(run.id, { name: 'v2' }, 1);
    expect(v2?.version).toBe(2);

    const v3 = await repo.updateRun(run.id, { name: 'v3' }, 2);
    expect(v3?.version).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// CAS invariant 2: Stale version returns null (→ HTTP 409)
// ---------------------------------------------------------------------------

describe('CAS: stale version returns null (VERSION_CONFLICT)', () => {
  it('update with wrong version returns null', async () => {
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'Stale Version Test', createdBy: 'tester', results: { create: [] } },
    });

    // Advance the version to 2
    await repo.updateRun(run.id, { name: 'Advanced' }, 1);

    // Now try to update with stale version=1
    const result = await repo.updateRun(run.id, { name: 'Conflict' }, 1);
    expect(result).toBeNull();
  });

  it('concurrent writers: only the first update wins', async () => {
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'Concurrent Write Test', createdBy: 'tester', results: { create: [] } },
    });

    // Simulate two concurrent writers both reading version=1
    const [result1, result2] = await Promise.all([
      repo.updateRun(run.id, { name: 'Writer A' }, 1),
      repo.updateRun(run.id, { name: 'Writer B' }, 1),
    ]);

    // Exactly one must succeed, one must return null
    const successes = [result1, result2].filter(r => r !== null);
    const conflicts = [result1, result2].filter(r => r === null);

    expect(successes).toHaveLength(1);
    expect(conflicts).toHaveLength(1);

    // The winner's version must be 2
    expect(successes[0]?.version).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// CAS invariant 3: Unconstrained updates bypass CAS (backwards compat path)
// ---------------------------------------------------------------------------

describe('CAS: unconstrained updates always succeed', () => {
  it('update without version always applies', async () => {
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'No Version Constraint', createdBy: 'tester', results: { create: [] } },
    });

    // updateRun without expectedVersion parameter
    const updated = await repo.updateRun(run.id, { name: 'Force Updated' });
    expect(updated).not.toBeNull();
    expect(updated!.name).toBe('Force Updated');
  });
});

// ---------------------------------------------------------------------------
// CAS invariant 4: New entities start with version=1
// ---------------------------------------------------------------------------

describe('CAS: new entities start at version 1', () => {
  it('TestRun.version is 1 immediately after creation', async () => {
    const run = await prisma.testRun.create({
      data: { projectId: PROJECT_ID, name: 'Initial Version', createdBy: 'tester', results: { create: [] } },
    });

    expect(run.version).toBe(1);
  });
});
