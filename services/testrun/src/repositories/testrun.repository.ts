import { PrismaClient } from '../../generated/client/index.js';

export class TestRunRepository {
  constructor(private readonly prisma: PrismaClient) {}

  findRuns(projectId: number, skip: number, take: number, sortOrder: 'asc' | 'desc', search?: string) {
    const where: any = {
      projectId,
      deletedAt: null,
      ...(search ? { name: { contains: search } } : {}),
    };

    return Promise.all([
      this.prisma.testRun.count({ where }),
      this.prisma.testRun.findMany({
        where,
        include: { results: true },
        skip,
        take,
        orderBy: { createdAt: sortOrder },
      }),
    ]);
  }

  findRunById(runId: number) {
    return this.prisma.testRun.findFirst({
      where: { id: runId, deletedAt: null },
      include: { results: true },
    });
  }

  createRun(data: {
    name: string;
    description?: string | undefined;
    projectId: number;
    suiteId?: number | undefined;
    createdBy: string;
    results: Array<{
      testCaseId: number;
      testCaseName?: string;
      title?: string;
      preconditions?: string | null;
      steps?: string | null;
      expectedResult?: string | null;
      priority?: string | null;
      type?: string | null;
      snapshottedAt?: Date;
      status: string;
    }>;
  }) {
    return this.prisma.testRun.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        projectId: data.projectId,
        suiteId: data.suiteId ?? null,
        createdBy: data.createdBy,
        results: { create: data.results },
      },
      include: { results: true },
    });
  }

  // Compare-and-swap update: when expectedVersion is given, the update only
  // applies if the row still has that version; returns null on conflict.
  async updateRun(
    runId: number,
    data: { name?: string | undefined; description?: string | undefined },
    expectedVersion?: number,
  ) {
    const patch = {
      ...(data.name !== undefined ? { name: data.name } : {}),
      ...(data.description !== undefined ? { description: data.description } : {}),
      updatedAt: new Date(),
      version: { increment: 1 },
    };
    if (expectedVersion === undefined) {
      return this.prisma.testRun.update({
        where: { id: runId },
        data: patch,
        include: { results: true },
      });
    }
    const { count } = await this.prisma.testRun.updateMany({
      where: { id: runId, version: expectedVersion },
      data: patch,
    });
    if (count === 0) return null;
    return this.prisma.testRun.findUnique({ where: { id: runId }, include: { results: true } });
  }

  softDeleteRun(runId: number) {
    return this.prisma.testRun.update({
      where: { id: runId },
      data: { deletedAt: new Date() },
    });
  }

  findResultById(resultId: number) {
    return this.prisma.testResult.findUnique({
      where: { id: resultId },
      include: { testRun: true },
    });
  }

  async updateResult(
    resultId: number,
    data: { status: string; comment?: string | undefined },
    expectedVersion?: number,
  ) {
    const patch = {
      status: data.status,
      ...(data.comment !== undefined ? { comment: data.comment } : {}),
      updatedAt: new Date(),
      version: { increment: 1 },
    };
    if (expectedVersion === undefined) {
      return this.prisma.testResult.update({
        where: { id: resultId },
        data: patch,
      });
    }
    const { count } = await this.prisma.testResult.updateMany({
      where: { id: resultId, version: expectedVersion },
      data: patch,
    });
    if (count === 0) return null;
    return this.prisma.testResult.findUnique({ where: { id: resultId } });
  }

  getResultsForRun(testRunId: number) {
    return this.prisma.testResult.findMany({
      where: { testRunId },
      select: { status: true },
    });
  }

  findProject(projectId: number) {
    return this.prisma.project.findUnique({ where: { id: projectId } });
  }

  upsertProject(projectId: number, name: string) {
    return this.prisma.project.upsert({
      where: { id: projectId },
      update: { name, updatedAt: new Date() },
      create: { id: projectId, name, createdAt: new Date(), updatedAt: new Date() },
    });
  }

  deleteProject(projectId: number) {
    return this.prisma.project.delete({ where: { id: projectId } });
  }

  upsertSuite(suiteId: number, projectId: number, name: string) {
    return this.prisma.suite.upsert({
      where: { id: suiteId },
      update: { name },
      create: { id: suiteId, projectId, name },
    });
  }

  deleteSuite(suiteId: number) {
    return this.prisma.suite.delete({ where: { id: suiteId } });
  }
}
