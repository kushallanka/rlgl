import { TestCaseRepository } from '../repositories/testcase.repository.js';

type CreateInput = {
  projectId: number;
  suiteId: number;
  sectionId: number;
  title: string;
  description?: string | undefined;
  preconditions?: string | undefined;
  steps: any[];
  expectedResult?: string | undefined;
  priority?: string | undefined;
  type?: string | undefined;
  customFieldValues?: Record<string, any> | undefined;
};

// Mapped manually (not Partial<>) so each property explicitly admits undefined
// under exactOptionalPropertyTypes — zod .optional() outputs `T | undefined`.
type UpdateInput = {
  [K in keyof Omit<CreateInput, 'projectId' | 'suiteId' | 'sectionId'>]?:
    Omit<CreateInput, 'projectId' | 'suiteId' | 'sectionId'>[K] | undefined;
};

function deserialize(tc: any) {
  return {
    ...tc,
    steps: tc.steps ? (() => { try { return JSON.parse(tc.steps); } catch { return []; } })() : [],
    customFieldValues: tc.customFieldValues ? (() => { try { return JSON.parse(tc.customFieldValues); } catch { return {}; } })() : {},
  };
}

export class TestCaseService {
  constructor(
    private readonly repo: TestCaseRepository,
    private readonly logger?: any,
  ) {}

  async listCases(projectId: number, filters: { suiteId?: number | undefined; sectionId?: number | undefined; search?: string | undefined }, page: number, limit: number, requestId: string) {
    const skip = (page - 1) * limit;
    const [total, cases] = await Promise.all([
      this.repo.count(projectId, filters),
      this.repo.findByProject(projectId, filters, skip, limit),
    ]);
    this.logger?.info({ requestId, projectId, count: cases.length }, 'Test cases listed');
    return {
      data: cases.map(deserialize),
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  }

  async getCase(id: number, projectId: number, requestId: string) {
    const tc = await this.repo.findById(id);
    if (!tc || tc.projectId !== projectId) return null;
    this.logger?.info({ requestId, projectId, testCaseId: id }, 'Test case fetched');
    return deserialize(tc);
  }

  async getCasesByIds(ids: number[], projectId: number, requestId: string) {
    const cases = await this.repo.findManyByIds(ids, projectId);
    const foundIds = new Set(cases.map(c => c.id));
    const missingIds = ids.filter(id => !foundIds.has(id));
    this.logger?.info({ requestId, projectId, requested: ids.length, found: cases.length }, 'Test cases batch fetched');
    return { cases: cases.map(deserialize), missingIds };
  }

  async createCase(data: CreateInput, createdBy: string, requestId: string) {
    const project = await this.repo.findProject(data.projectId);
    if (!project) {
      throw Object.assign(new Error('Project not found'), { statusCode: 404 });
    }

    const suite = await this.repo.findSuite(data.suiteId);
    if (!suite || suite.projectId !== data.projectId) {
      throw Object.assign(new Error('Suite not found'), { statusCode: 404 });
    }

    const section = await this.repo.findSection(data.sectionId);
    if (!section || section.projectId !== data.projectId) {
      throw Object.assign(new Error('Section not found'), { statusCode: 404 });
    }

    const tc = await this.repo.create({ ...data, createdBy });
    this.logger?.info({ requestId, projectId: data.projectId, testCaseId: tc.id }, 'Test case created');
    return deserialize(tc);
  }

  async updateCase(id: number, projectId: number, data: UpdateInput & { version?: number | undefined }, updatedBy: string, requestId: string) {
    const { version, ...patch } = data;
    const existing = await this.repo.findById(id);
    if (!existing || existing.projectId !== projectId) {
      throw Object.assign(new Error('Test case not found'), { statusCode: 404 });
    }
    const updated = await this.repo.update(id, { ...patch, updatedBy }, version);
    if (!updated) {
      this.logger?.warn({ requestId, projectId, testCaseId: id, version }, 'Test case version conflict');
      throw Object.assign(new Error('Test case was modified by someone else. Refresh and retry.'), { statusCode: 409, code: 'VERSION_CONFLICT' });
    }
    this.logger?.info({ requestId, projectId, testCaseId: id }, 'Test case updated');
    return deserialize(updated);
  }

  async deleteCase(id: number, projectId: number, requestId: string) {
    const existing = await this.repo.findById(id);
    if (!existing || existing.projectId !== projectId) {
      throw Object.assign(new Error('Test case not found'), { statusCode: 404 });
    }
    await this.repo.softDelete(id);
    this.logger?.info({ requestId, projectId, testCaseId: id }, 'Test case soft-deleted');
  }
}
