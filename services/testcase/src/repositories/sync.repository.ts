import { PrismaClient } from '../../generated/client';

export class SyncRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async upsertProject(projectId: number, name: string) {
    return this.prisma.project.upsert({
      where: { id: projectId },
      update: { name, updatedAt: new Date() },
      create: { id: projectId, name, createdAt: new Date(), updatedAt: new Date() },
    });
  }

  async deleteProject(projectId: number) {
    return this.prisma.project.delete({ where: { id: projectId } });
  }
}
