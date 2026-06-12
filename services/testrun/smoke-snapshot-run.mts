// Smoke test: snapshot-based run creation + optimistic concurrency.
// Requires the testcase service on TESTCASE_SERVICE_URL (default localhost:3003).
import { PrismaClient } from './generated/client/index.js';
import { TestRunRepository } from './src/repositories/testrun.repository.js';
import { TestRunService } from './src/services/testrun.service.js';

const prisma = new PrismaClient();
const repo = new TestRunRepository(prisma);
const service = new TestRunService(repo, undefined, console);

const user = { userId: 1, email: 'smoke@test.local', firstName: 'Smoke', lastName: 'Test' } as any;

// 1. Create a run snapshotting real cases
const created = await service.createRun(
  { name: 'SMOKE snapshot run', description: 'temp', projectId: 1, caseIds: [4, 5, 6, 7] },
  user, 1, 'smoke-req-1', 'unused-token'
);
if (created.error) throw new Error(`createRun failed: ${created.error}`);
const run = created.data!;
console.log(`run ${run.id} created with ${run.results.length} results, version=${run.version}`);

for (const r of run.results) {
  if (!r.title || !r.steps || r.snapshottedAt === null) {
    throw new Error(`result ${r.id} missing snapshot fields: ${JSON.stringify(r)}`);
  }
}
console.log('PASS: all results carry full snapshots (title/steps/snapshottedAt)');
console.log('sample snapshot:', JSON.stringify({
  testCaseId: run.results[0].testCaseId, title: run.results[0].title,
  steps: run.results[0].steps, priority: run.results[0].priority, type: run.results[0].type,
}));

// 2. Invalid case id must 400 with the missing ids
const bad = await service.createRun(
  { name: 'SMOKE bad run', projectId: 1, caseIds: [99999] }, user, 1, 'smoke-req-2', 'unused-token'
);
if (bad.status !== 400) throw new Error(`expected 400 for missing case, got ${bad.status}`);
console.log('PASS: missing case ids rejected with 400');

// 3. CAS: stale version must conflict with 409
const ok = await service.updateRun(run.id, 1, { name: 'renamed once', version: 1 }, 'smoke-req-3');
if (ok.status !== 200) throw new Error(`expected 200 on matching version, got ${ok.status}`);
const conflict = await service.updateRun(run.id, 1, { name: 'stale write', version: 1 }, 'smoke-req-4');
if (conflict.status !== 409) throw new Error(`expected 409 on stale version, got ${conflict.status}`);
console.log(`PASS: CAS update (version 1 -> ok, stale version -> 409 ${'' + (conflict as any).code})`);

// 4. Result update with version
const result = run.results[0];
const resOk = await service.updateResult(result.id, 1, { status: 'Passed', version: 1 }, 1, 'smoke-req-5');
if (resOk.status !== 200) throw new Error(`expected 200 result update, got ${resOk.status}`);
const resConflict = await service.updateResult(result.id, 1, { status: 'Failed', version: 1 }, 1, 'smoke-req-6');
if (resConflict.status !== 409) throw new Error(`expected 409 stale result update, got ${resConflict.status}`);
console.log('PASS: result CAS update works (ok then 409)');

// 5. Snapshot immutability proof: result keeps data even for a deleted case id
//    (we just verify the snapshot is self-contained; no join needed)
const stored = await prisma.testResult.findUnique({ where: { id: result.id } });
if (!stored?.title || !stored?.steps) throw new Error('stored result is not self-contained');
console.log('PASS: stored results are self-contained snapshots');

// Cleanup
await prisma.testRun.delete({ where: { id: run.id } });
console.log('cleanup done');
await prisma.$disconnect();
console.log('ALL SMOKE TESTS PASSED');
