// Smoke test: run creation must fail closed (503) when the testcase service
// is unreachable — never create a run with placeholder snapshots.
import { PrismaClient } from './generated/client/index.js';
import { TestRunRepository } from './src/repositories/testrun.repository.js';
import { TestRunService } from './src/services/testrun.service.js';

const prisma = new PrismaClient();
const service = new TestRunService(new TestRunRepository(prisma), undefined, console);
const before = await prisma.testRun.count();

const res = await service.createRun(
  { name: 'SMOKE unreachable', projectId: 1, caseIds: [4] },
  { userId: 1, email: 's@t.local' } as any,
  1,
  'smoke-down-1',
  'unused',
);
if (res.status !== 503) throw new Error(`expected 503 when testcase service is down, got ${res.status}`);

const after = await prisma.testRun.count();
if (after !== before) throw new Error('a run was created despite snapshot failure!');
console.log('PASS: unreachable testcase service -> 503, no run created');
await prisma.$disconnect();
