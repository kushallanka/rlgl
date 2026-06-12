import axios from 'axios';
import { IAMRepository } from '../repositories/iam.repository.js';
import { CircuitBreaker, createLogger, logAudit } from '@rlgl/shared';

const logger = createLogger({ service: 'auth-iam-service' });

export class IAMService {
  private breaker: CircuitBreaker;

  constructor(
    private readonly repo: IAMRepository,
    private readonly projectServiceUrl: string
  ) {
    this.breaker = new CircuitBreaker('project-service-fallback', {
      failureThreshold: 5,
      resetTimeoutMs: 30000,
      halfOpenMaxRequests: 2,
    });
  }

  async getPermissions(userId: number, projectId: number): Promise<string[]> {
    const isDualReadEnabled = process.env.FEATURE_IAM_DUAL_READ === 'true';
    const isShadowReadEnabled = process.env.FEATURE_IAM_SHADOW_READ === 'true';

    // 1. Primary Read from local IAM DB
    let iamPerms: string[] | null = null;
    try {
      iamPerms = await this.repo.findUserPermissions(userId, projectId);
    } catch (err: any) {
      logger.error({ error: err.message, userId, projectId }, 'IAM local read failed');
    }

    // 2. Dual/Shadow Read logic
    if (isDualReadEnabled || isShadowReadEnabled) {
      try {
        const legacyPerms = await this.breaker.execute(async () => {
          const resp = await axios.get(`${this.projectServiceUrl}/${projectId}/permissions/mine`, {
            headers: { 'x-user-id': userId.toString() } // Internal call simulation
          });
          return resp.data.permissions as string[];
        });

        // Consistency Check (Shadow Read)
        if (iamPerms && JSON.stringify(iamPerms.sort()) !== JSON.stringify(legacyPerms.sort())) {
          logAudit(logger, 'IAM_CONSISTENCY_MISMATCH', {
            userId, projectId, iamPerms, legacyPerms
          });
          
          // Auto-Heal Trigger (Optional but Elite)
          // In a real system, you'd queue a sync job here
        }

        // 3. Fallback logic: If dual read is active and IAM failed/is-empty, use legacy
        if (isDualReadEnabled && (!iamPerms || iamPerms.length === 0)) {
          return legacyPerms;
        }
      } catch (err: any) {
        logger.warn({ error: err.message }, 'Project service fallback failed or breaker open');
      }
    }

    return iamPerms || [];
  }

  /**
   * List all project IDs a user has access to
   */
  async listProjectIdsForUser(userId: number): Promise<number[]> {
    return this.repo.listProjectIdsForUser(userId);
  }

  /**
   * Initialize a project with admin role and assign to user
   */
  async initProjectAdmin(projectId: number, userId: number): Promise<void> {
    return this.repo.initProjectAdmin(projectId, userId);
  }
}
