import { PrismaClient } from '../../generated/client/index.js';

/**
 * IAMRepository - Identity & Access Management
 * Handles roles, permissions, and user-role mappings
 * Separate from AuthRepository to maintain single responsibility principle
 */
export class IAMRepository {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Find all permissions for a user in a project
   */
  async findUserPermissions(userId: number, projectId: number): Promise<string[]> {
    const roles = await this.prisma.projectUserRole.findMany({
      where: { userId, projectId },
      include: { ProjectRole: { include: { ProjectPermission: true } } }
    });
    
    // Flatten and deduplicate permissions
    const permissions = [...new Set(
      roles.flatMap(r => r.ProjectRole.ProjectPermission.map(p => p.action))
    )];
    
    return permissions;
  }

  /**
   * List all project IDs a user has access to
   */
  async listProjectIdsForUser(userId: number): Promise<number[]> {
    const rows = await this.prisma.projectUserRole.findMany({
      where: { userId },
      select: { projectId: true },
      distinct: ['projectId'],
    });
    return rows.map((r) => r.projectId);
  }

  /**
   * Initialize a project with admin role and assign to user
   * Called when a new project is created
   */
  async initProjectAdmin(projectId: number, userId: number): Promise<void> {
    const ALL_PERMISSIONS = [
      'testcase.view', 'testcase.create', 'testcase.edit', 'testcase.delete',
      'testrun.view', 'testrun.create', 'testrun.update', 'testrun.delete',
      'config.manage', 'project.manage', 'member.manage',
    ];

    await this.prisma.$transaction(async (tx) => {
      const adminRole = await tx.projectRole.create({
        data: {
          projectId,
          name: 'Project Admin',
          description: 'Full access to the project',
          ProjectPermission: {
            create: ALL_PERMISSIONS.map((action) => ({ projectId, action })),
          },
        },
      });

      await tx.projectUserRole.create({
        data: { projectId, userId, roleId: adminRole.id },
      });
    });
  }

  /**
   * Find a user's role in a project
   */
  async findUserRole(userId: number, projectId: number) {
    return this.prisma.projectUserRole.findFirst({
      where: { userId, projectId },
      include: { ProjectRole: { include: { ProjectPermission: true } } }
    });
  }

  /**
   * Assign a role to a user in a project
   */
  async assignRoleToUser(userId: number, projectId: number, roleId: number) {
    return this.prisma.projectUserRole.create({
      data: { userId, projectId, roleId }
    });
  }

  /**
   * Update a user's role in a project
   */
  async updateUserRole(userId: number, projectId: number, roleId: number) {
    return this.prisma.projectUserRole.updateMany({
      where: { userId, projectId },
      data: { roleId }
    });
  }

  /**
   * Remove a user from a project (revoke all roles)
   */
  async removeUserFromProject(userId: number, projectId: number) {
    return this.prisma.projectUserRole.deleteMany({
      where: { userId, projectId }
    });
  }
}
