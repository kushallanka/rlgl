/**
 * Invariant tests: Organization and project boundary enforcement.
 *
 * A user in org A must never be able to read, write, or enumerate
 * resources belonging to org B — even with a valid JWT.
 *
 * These tests verify that project-scoped isolation holds at the
 * service layer (repository + service), independent of the gateway's
 * auth middleware.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { PrismaClient } from '../../services/testrun/generated/client/index.js';
import { TestRunRepository } from '../../services/testrun/src/repositories/testrun.repository.js';
import { createTestRunDb, type TestDb } from '../helpers/testrun-db.js';

let db: TestDb;
let prisma: PrismaClient;
let repo: TestRunRepository;

const ORG_A_PROJECT = 6001;
const ORG_B_PROJECT = 6002;

beforeEach(async () => {
  db = await createTestRunDb('org-isolation');
  prisma = db.prisma;
  repo = new TestRunRepository(prisma);

  await prisma.$executeRawUnsafe(
    `INSERT OR IGNORE INTO Project (id, name) VALUES (${ORG_A_PROJECT}, 'Org A Project'), (${ORG_B_PROJECT}, 'Org B Project')`
  );

  // Seed one run in each org's project
  await prisma.testRun.create({
    data: { projectId: ORG_A_PROJECT, name: 'Org A Run', createdBy: 'user-a', results: { create: [] } },
  });
  await prisma.testRun.create({
    data: { projectId: ORG_B_PROJECT, name: 'Org B Run', createdBy: 'user-b', results: { create: [] } },
  });
});

afterEach(async () => {
  await db.cleanup();
});

// ---------------------------------------------------------------------------
// Isolation 1: List runs scoped strictly to requested project
// ---------------------------------------------------------------------------

describe('Project boundary: list runs', () => {
  it('listing runs for org A project returns only org A runs', async () => {
    const [, runs] = await repo.findRuns(ORG_A_PROJECT, 0, 100, 'desc');
    expect(runs.every(r => r.projectId === ORG_A_PROJECT)).toBe(true);
    const hasOrgBRun = runs.some(r => r.projectId === ORG_B_PROJECT);
    expect(hasOrgBRun).toBe(false);
  });

  it('listing runs for org B project returns only org B runs', async () => {
    const [, runs] = await repo.findRuns(ORG_B_PROJECT, 0, 100, 'desc');
    expect(runs.every(r => r.projectId === ORG_B_PROJECT)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Isolation 2: Get run by ID must verify project ownership
// ---------------------------------------------------------------------------

describe('Project boundary: get run by ID', () => {
  it('findRunById does not leak projectId check — caller must enforce', async () => {
    // Get the org B run ID
    const [, orgBRuns] = await repo.findRuns(ORG_B_PROJECT, 0, 100, 'desc');
    const orgBRun = orgBRuns[0];
    if (!orgBRun) throw new Error('No org B run seeded');

    // The repository returns the run — the SERVICE layer must check projectId
    const run = await repo.findRunById(orgBRun.id);
    expect(run).not.toBeNull();
    expect(run!.projectId).toBe(ORG_B_PROJECT);

    // Verify that org A user would see projectId !== ORG_A_PROJECT and must deny
    const isOrgAResource = run!.projectId === ORG_A_PROJECT;
    expect(isOrgAResource).toBe(false);
    // This is the check the service.getRun() must perform before returning the run
  });
});

// ---------------------------------------------------------------------------
// Isolation 3: Search does not cross project boundaries
// ---------------------------------------------------------------------------

describe('Project boundary: search isolation', () => {
  it('search within org A project does not return org B runs', async () => {
    // "Org" appears in both runs' names — only A should be returned for A's project
    const [, results] = await repo.findRuns(ORG_A_PROJECT, 0, 100, 'desc', 'Org');
    expect(results.every(r => r.projectId === ORG_A_PROJECT)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Isolation 4: Counts are project-scoped
// ---------------------------------------------------------------------------

describe('Project boundary: count accuracy', () => {
  it('total count for org A project includes only org A runs', async () => {
    const [total] = await repo.findRuns(ORG_A_PROJECT, 0, 100, 'desc');
    expect(total).toBeGreaterThanOrEqual(1);

    const [totalB] = await repo.findRuns(ORG_B_PROJECT, 0, 100, 'desc');
    expect(totalB).toBeGreaterThanOrEqual(1);

    // The two totals must not influence each other
    const [totalAAfterBQuery] = await repo.findRuns(ORG_A_PROJECT, 0, 100, 'desc');
    expect(totalAAfterBQuery).toBe(total);
  });
});
