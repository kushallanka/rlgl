import { createLogger, logAudit } from '@rlgl/shared';
import axios from 'axios';
import { PrismaClient } from '../../generated/client/index.js';

const logger = createLogger({ service: 'iam-consistency-job' });

export async function runConsistencyCheck() {
  const iamPrisma = new PrismaClient();
  const projectServiceUrl = process.env.PROJECT_SERVICE_URL || 'http://project:3002';

  try {
    // 1. Fetch all project IDs from IAM
    const projects = await iamPrisma.projectRole.findMany({ select: { projectId: true }, distinct: ['projectId'] });

    let mismatchCount = 0;
    let totalChecks = 0;

    for (const { projectId } of projects) {
      // 2. Fetch all user roles for this project from IAM
      const iamUserRoles = await iamPrisma.projectUserRole.findMany({
        where: { projectId },
        include: { ProjectRole: { include: { ProjectPermission: true } } },
      });

      // 3. Fetch from legacy Project service (simulated as internal API call)
      const resp = await axios.get(`${projectServiceUrl}/${projectId}/users/roles/internal`);
      const legacyUserRoles = resp.data;

      // 4. Compare
      totalChecks++;
      if (iamUserRoles.length !== legacyUserRoles.length) {
        logAudit(logger, 'IAM_CONSISTENCY_MISMATCH', {
          projectId,
          iamCount: iamUserRoles.length,
          legacyCount: legacyUserRoles.length,
          severity: 'HIGH',
        });
        mismatchCount++;

        // Auto-Heal Strategy
        await triggerAutoHeal(projectId);
      }
    }

    const mismatchRate = totalChecks > 0 ? mismatchCount / totalChecks : 0;

    logAudit(logger, 'IAM_CHECK_COMPLETE', {
      totalChecks,
      mismatchCount,
      mismatchRate,
      status: mismatchRate < 0.0001 ? 'HEALTHY' : 'DEGRADED',
    });
  } catch (err: any) {
    logger.error({ error: err.message }, 'Consistency check failed');
  } finally {
    await iamPrisma.$disconnect();
  }
}

async function triggerAutoHeal(projectId: number) {
  // logic to quarantine project and re-sync from authoritative source
  logger.warn(`Auto-heal triggered for project ${projectId}`);
}
