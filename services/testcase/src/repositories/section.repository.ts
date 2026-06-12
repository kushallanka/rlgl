import { PrismaClient } from '../../generated/client';

export class SectionRepository {
  constructor(private prisma: PrismaClient) {}

  async findBySuite(suiteId: number, projectId: number) {
    return this.prisma.section.findMany({
      where: { projectId, suiteId },
    });
  }

  async findById(id: number) {
    return this.prisma.section.findUnique({ where: { id } });
  }

  async create(data: { name: string; suiteId: number; projectId: number }) {
    return this.prisma.section.create({ data });
  }

  async update(id: number, data: { name?: string | undefined }) {
    const updateData: any = { updatedAt: new Date() };
    if (data.name !== undefined) updateData.name = data.name;
    return this.prisma.section.update({ where: { id }, data: updateData });
  }

  async deleteWithCascade(id: number) {
    return this.prisma.$transaction([
      this.prisma.testCase.deleteMany({ where: { sectionId: id } }),
      this.prisma.section.delete({ where: { id } }),
    ]);
  }
}
