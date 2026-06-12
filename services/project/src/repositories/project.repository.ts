import { PrismaClient } from '../../generated/client/index.js';

export class ProjectRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAllForUser(projectIds: number[]) {
    return this.prisma.project.findMany({
      where: { id: { in: projectIds }, deletedAt: null },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findById(id: number) {
    return this.prisma.project.findUnique({
      where: { id, deletedAt: null }
    });
  }

  async create(data: any) {
    return this.prisma.project.create({ data });
  }

  async update(id: number, data: any) {
    return this.prisma.project.update({
      where: { id, deletedAt: null },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
  }

  async softDelete(id: number) {
    return this.prisma.project.update({
      where: { id, deletedAt: null },
      data: { deletedAt: new Date() }
    });
  }

  async findAll() {
    return this.prisma.project.findMany({
      where: { deletedAt: null },
      select: { id: true, name: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  async createWithAdminRole(name: string, description: string | undefined, userId: number, permissions: string[]) {
    return this.prisma.$transaction(async (tx) => {
      const project = await tx.project.create({
        data: { name, ...(description !== undefined ? { description } : {}) }
      });
      
      const adminRole = await tx.projectRole.create({
        data: {
          projectId: project.id,
          name: 'Project Admin',
          description: 'Full access to the project',
          permissions: {
            create: permissions.map(action => ({ projectId: project.id, action }))
          }
        },
        include: { permissions: true }
      });
      
      await tx.projectUserRole.create({
        data: { projectId: project.id, userId, roleId: adminRole.id }
      });
      
      return project;
    });
  }

  async getProjectSchema(projectId: number) {
    const [types, priorities, fields, roles] = await Promise.all([
      this.prisma.testCaseType.findMany({ where: { projectId } }),
      this.prisma.priority.findMany({ where: { projectId }, orderBy: { level: 'asc' } }),
      this.prisma.customField.findMany({
        where: { projectId },
        include: { options: { orderBy: { order: 'asc' } } },
        orderBy: { order: 'asc' }
      }),
      this.prisma.projectRole.findMany({
        where: { projectId },
        include: { permissions: true }
      })
    ]);
    return { types, priorities, customFields: fields, roles };
  }

  async getRoles(projectId: number) {
    return this.prisma.projectRole.findMany({
      where: { projectId },
      include: { permissions: true }
    });
  }

  async createRole(projectId: number, data: { name: string; description?: string; permissions: string[] }) {
    const { permissions, ...roleData } = data;
    return this.prisma.projectRole.create({
      data: {
        projectId,
        ...roleData,
        permissions: {
          create: permissions.map(action => ({ projectId, action }))
        }
      },
      include: { permissions: true }
    });
  }

  async updateRole(roleId: number, projectId: number, data: { name?: string; description?: string; permissions?: string[] }) {
    const { permissions, ...roleData } = data;
    
    if (permissions) {
      await this.prisma.projectPermission.deleteMany({ where: { roleId } });
      await this.prisma.projectPermission.createMany({
        data: permissions.map(action => ({ projectId, roleId, action }))
      });
    }
    
    return this.prisma.projectRole.update({
      where: { id: roleId },
      data: roleData,
      include: { permissions: true }
    });
  }

  async deleteRole(roleId: number) {
    return this.prisma.projectRole.delete({ where: { id: roleId } });
  }

  async getUserRoles(projectId: number) {
    return this.prisma.projectUserRole.findMany({
      where: { projectId },
      include: { role: { include: { permissions: true } } }
    });
  }

  async assignUserRole(projectId: number, userId: number, roleId: number) {
    return this.prisma.projectUserRole.create({
      data: { projectId, userId, roleId },
      include: { role: { include: { permissions: true } } }
    });
  }

  async removeUserRole(projectId: number, userId: number, roleId: number) {
    return this.prisma.projectUserRole.deleteMany({
      where: { projectId, userId, roleId }
    });
  }

  // Test Case Types
  async createType(projectId: number, data: { name: string; description?: string; color?: string }) {
    return this.prisma.testCaseType.create({ data: { projectId, ...data } });
  }

  async updateType(typeId: number, data: { name?: string; description?: string; color?: string }) {
    return this.prisma.testCaseType.update({ where: { id: typeId }, data });
  }

  async deleteType(typeId: number) {
    return this.prisma.testCaseType.delete({ where: { id: typeId } });
  }

  // Priorities
  async createPriority(projectId: number, data: { name: string; level: number; color?: string }) {
    return this.prisma.priority.create({ data: { projectId, ...data } });
  }

  async updatePriority(priorityId: number, data: { name?: string; level?: number; color?: string }) {
    return this.prisma.priority.update({ where: { id: priorityId }, data });
  }

  async deletePriority(priorityId: number) {
    return this.prisma.priority.delete({ where: { id: priorityId } });
  }

  // Custom Fields
  async createCustomField(projectId: number, data: { name: string; fieldType: string; required?: boolean; description?: string }) {
    return this.prisma.customField.create({ data: { projectId, ...data } });
  }

  async updateCustomField(fieldId: number, data: { name?: string; fieldType?: string; required?: boolean; description?: string }) {
    return this.prisma.customField.update({ where: { id: fieldId }, data });
  }

  async deleteCustomField(fieldId: number) {
    return this.prisma.customField.delete({ where: { id: fieldId } });
  }
}
