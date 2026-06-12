import { SuiteRepository } from '../repositories/suite.repository.js';
import type { EventBus } from '@rlgl/shared';
import { TESTRUN_SERVICE_URL } from '../config/constants.js';

export class SuiteService {
  constructor(
    private suiteRepo: SuiteRepository,
    _logger: unknown,
    private readonly eventBus?: EventBus,
  ) {}

  async listSuites(projectId: number, page: number, limit: number, search?: string) {
    const [total, suites] = await Promise.all([
      this.suiteRepo.countByProject(projectId, search),
      this.suiteRepo.findByProject(projectId, page, limit, search),
    ]);
    return {
      data: suites,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  }

  async createSuite(data: { name: string; description?: string | undefined; projectId: number }, requestId?: string) {
    const project = await this.suiteRepo.findProject(data.projectId);
    if (!project) {
      throw Object.assign(new Error('Project not found'), { statusCode: 404 });
    }
    const suite = await this.suiteRepo.create(data);
    this.eventBus?.publishEvent('testcase.created', { suiteId: suite.id, name: suite.name }, { requestId, projectId: String(suite.projectId) }).catch(() => {});
    fetch(`${TESTRUN_SERVICE_URL}/sync/suite`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ suiteId: suite.id, projectId: suite.projectId, name: suite.name }),
    }).catch(() => {});
    return suite;
  }

  async updateSuite(id: number, projectId: number, data: { name?: string | undefined; description?: string | undefined }, requestId?: string) {
    const existing = await this.suiteRepo.findById(id);
    if (!existing || existing.projectId !== projectId) {
      throw Object.assign(new Error('Suite not found'), { statusCode: 404 });
    }
    const updated = await this.suiteRepo.update(id, data);
    this.eventBus?.publishEvent('testcase.updated', { suiteId: id, changes: data }, { requestId, projectId: String(projectId) }).catch(() => {});
    return updated;
  }

  async deleteSuite(id: number, projectId: number, requestId?: string) {
    const existing = await this.suiteRepo.findById(id);
    if (!existing || existing.projectId !== projectId) {
      throw Object.assign(new Error('Suite not found'), { statusCode: 404 });
    }
    await this.suiteRepo.deleteWithCascade(id);
    this.eventBus?.publishEvent('testcase.deleted', { suiteId: id }, { requestId, projectId: String(projectId) }).catch(() => {});
    fetch(`${TESTRUN_SERVICE_URL}/sync/suite/${id}`, { method: 'DELETE' }).catch(() => {});
  }

  async findById(id: number) {
    return this.suiteRepo.findById(id);
  }

  async listAllSuites() {
    return this.suiteRepo.findAll();
  }
}
