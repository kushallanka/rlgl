import { createLogger, logAudit } from '@rlgl/shared';
import { PrismaClient } from '../../generated/client/index.js';

const logger = createLogger({ service: 'iam-backfill-job' });

export async function runIAMBackfill() {
  let iamPrisma: PrismaClient | null = null;
  let legacyPrisma: PrismaClient | null = null;

  try {
    iamPrisma = new PrismaClient();

    // We point to the legacy database file directly for the migration
    // In a real system, this might be a cross-DB query or an API-based stream
    legacyPrisma = new PrismaClient({
      datasources: { db: { url: 'file:../../data/project/project.db' } },
    });
    const legacyRoles = await (legacyPrisma as any).projectRole.findMany({
      include: { permissions: true },
    });

    logger.info(`Starting backfill of ${legacyRoles.length} roles...`);

    for (const role of legacyRoles) {
      await iamPrisma!.projectRole.upsert({
        where: { projectId_name: { projectId: role.projectId, name: role.name } },
        update: {},
        create: {
          id: role.id,
          projectId: role.projectId,
          name: role.name,
          description: role.description,
          ProjectPermission: {
            create: role.permissions.map((p: any) => ({
              projectId: p.projectId,
              action: p.action,
            })),
          },
        },
      });
    }

    const legacyUserRoles = await (legacyPrisma as any).projectUserRole.findMany();
    for (const ur of legacyUserRoles) {
      await iamPrisma!.projectUserRole.upsert({
        where: {
          projectId_userId_roleId: {
            projectId: ur.projectId,
            userId: ur.userId,
            roleId: ur.roleId,
          },
        },
        update: {},
        create: {
          projectId: ur.projectId,
          userId: ur.userId,
          roleId: ur.roleId,
        },
      });
    }

    logAudit(logger, 'IAM_BACKFILL_COMPLETE', {
      rolesCount: legacyRoles.length,
      userRolesCount: legacyUserRoles.length,
    });
  } catch (err: any) {
    logger.error({ error: err.message }, 'Backfill failed');
  } finally {
    await iamPrisma?.$disconnect();
    await legacyPrisma?.$disconnect();
  }
}
