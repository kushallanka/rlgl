import { SyncRepository } from '../repositories/sync.repository.js';

export class SyncService {
  constructor(
    private readonly syncRepo: SyncRepository,
    private readonly logger: any,
  ) {}

  async syncProject(projectId: number, name: string, requestId: string) {
    if (!projectId || !name) {
      return { error: 'projectId and name are required', status: 400 };
    }
    try {
      await this.syncRepo.upsertProject(projectId, name);
      this.logger.info?.('Project synced to testcase service', { requestId, projectId, action: 'upsert' });
      return { data: { status: 'synced', projectId }, status: 200 };
    } catch (err: any) {
      this.logger.error?.('Project sync failed', { requestId, projectId, error: err.message });
      return { error: 'Failed to sync project', details: err.message, status: 500 };
    }
  }

  async deleteProject(projectId: number, requestId: string) {
    try {
      await this.syncRepo.deleteProject(projectId);
      this.logger.info?.('Project deleted from testcase service', { requestId, projectId });
      return { status: 204 };
    } catch (err: any) {
      if (err.code === 'P2025') {
        this.logger.info?.('Project not found (already deleted)', { requestId, projectId });
        return { status: 204 };
      }
      this.logger.error?.('Project delete failed', { requestId, projectId, error: err.message });
      return { error: 'Failed to delete project', details: err.message, status: 500 };
    }
  }
}
