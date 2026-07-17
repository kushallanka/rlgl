import { PrismaClient } from '../../generated/client';

type CreateData = {
  projectId: number;
  suiteId: number;
  sectionId: number;
  title: string;
  description?: string | undefined;
  preconditions?: string | undefined;
  steps: any[];
  expectedResult?: string | undefined;
  priority?: string | undefined;
  type?: string | undefined;
  customFieldValues?: Record<string, any> | undefined;
  createdBy?: string | undefined;
};

// Mapped manually (not Partial<>) so each property explicitly admits undefined
// under exactOptionalPropertyTypes.
type UpdateData = {
  [K in keyof (Omit<CreateData, 'projectId' | 'suiteId' | 'sectionId' | 'createdBy'> & { updatedBy?: string })]?:
    | (Omit<CreateData, 'projectId' | 'suiteId' | 'sectionId' | 'createdBy'> & { updatedBy?: string })[K]
    | undefined;
};

type Filters = { suiteId?: number | undefined; sectionId?: number | undefined; search?: string | undefined };

export class TestCaseRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async count(projectId: number, filters: Filters = {}) {
    const where: any = { projectId, deletedAt: null };
    if (filters.suiteId) where.suiteId = filters.suiteId;
    if (filters.sectionId) where.sectionId = filters.sectionId;
    if (filters.search) where.title = { contains: filters.search };
    return this.prisma.testCase.count({ where });
  }

  async findByProject(projectId: number, filters: Filters = {}, skip = 0, take = 20) {
    const where: any = { projectId, deletedAt: null };
    if (filters.suiteId) where.suiteId = filters.suiteId;
    if (filters.sectionId) where.sectionId = filters.sectionId;
    if (filters.search) where.title = { contains: filters.search };
    return this.prisma.testCase.findMany({ where, skip, take, orderBy: { createdAt: 'desc' } });
  }

  async findById(id: number) {
    return this.prisma.testCase.findFirst({ where: { id, deletedAt: null } });
  }

  async findManyByIds(ids: number[], projectId: number) {
    return this.prisma.testCase.findMany({
      where: { id: { in: ids }, projectId, deletedAt: null },
    });
  }

  async create(data: CreateData) {
    return this.prisma.testCase.create({
      data: {
        projectId: data.projectId,
        suiteId: data.suiteId,
        sectionId: data.sectionId,
        title: data.title,
        description: data.description ?? null,
        preconditions: data.preconditions ?? null,
        steps: JSON.stringify(data.steps ?? []),
        expectedResult: data.expectedResult ?? null,
        priority: data.priority ?? 'Medium',
        type: data.type ?? 'Functional',
        customFieldValues: data.customFieldValues ? JSON.stringify(data.customFieldValues) : null,
        createdBy: data.createdBy ?? null,
      },
    });
  }

  // Compare-and-swap update: when expectedVersion is given, the update only
  // applies if the row still has that version; returns null on conflict.
  async update(id: number, data: UpdateData, expectedVersion?: number) {
    const patch: any = { updatedAt: new Date(), version: { increment: 1 } };
    if (data.title !== undefined) patch.title = data.title;
    if (data.description !== undefined) patch.description = data.description;
    if (data.preconditions !== undefined) patch.preconditions = data.preconditions;
    if (data.steps !== undefined) patch.steps = JSON.stringify(data.steps);
    if (data.expectedResult !== undefined) patch.expectedResult = data.expectedResult;
    if (data.priority !== undefined) patch.priority = data.priority;
    if (data.type !== undefined) patch.type = data.type;
    if (data.customFieldValues !== undefined) patch.customFieldValues = JSON.stringify(data.customFieldValues);
    if (data.updatedBy !== undefined) patch.updatedBy = data.updatedBy;

    if (expectedVersion === undefined) {
      return this.prisma.testCase.update({ where: { id }, data: patch });
    }
    const { count } = await this.prisma.testCase.updateMany({
      where: { id, version: expectedVersion },
      data: patch,
    });
    if (count === 0) return null;
    return this.prisma.testCase.findUnique({ where: { id } });
  }

  async softDelete(id: number) {
    return this.prisma.testCase.update({ where: { id }, data: { deletedAt: new Date() } });
  }

  async findProject(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  async findSuite(id: number) {
    return this.prisma.suite.findUnique({ where: { id } });
  }

  async findSection(id: number) {
    return this.prisma.section.findUnique({ where: { id } });
  }
}
