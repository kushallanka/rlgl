import { PrismaClient } from '../../generated/client';

export class SuiteRepository {
  constructor(private prisma: PrismaClient) {}

  async countByProject(projectId: number, search?: string) {
    const where: any = { projectId };
    if (search) where.name = { contains: search };
    return this.prisma.suite.count({ where });
  }

  async findByProject(projectId: number, page: number, limit: number, search?: string) {
    const where: any = { projectId };
    if (search) where.name = { contains: search };
    return this.prisma.suite.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: number) {
    return this.prisma.suite.findUnique({ where: { id } });
  }

  async findProject(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  async create(data: { name: string; description?: string | undefined; projectId: number }) {
    return this.prisma.suite.create({
      data: {
        name: data.name,
        projectId: data.projectId,
        ...(data.description !== undefined ? { description: data.description } : {}),
      },
    });
  }

  async update(id: number, data: { name?: string | undefined; description?: string | undefined }) {
    const updateData: any = { updatedAt: new Date() };
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined) updateData.description = data.description;
    return this.prisma.suite.update({ where: { id }, data: updateData });
  }

  async findAll() {
    return this.prisma.suite.findMany({
      select: { id: true, projectId: true, name: true },
      orderBy: { id: 'asc' },
    });
  }

  async deleteWithCascade(id: number) {
    return this.prisma.$transaction([
      this.prisma.testCase.deleteMany({ where: { suiteId: id } }),
      this.prisma.section.deleteMany({ where: { suiteId: id } }),
      this.prisma.suite.delete({ where: { id } }),
    ]);
  }
}
