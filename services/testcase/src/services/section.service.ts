import { SectionRepository } from '../repositories/section.repository.js';
import { SuiteRepository } from '../repositories/suite.repository.js';

export class SectionService {
  constructor(
    private sectionRepo: SectionRepository,
    private suiteRepo: SuiteRepository,
    _logger: unknown,
  ) {}

  async listSections(projectId: number, suiteId?: number) {
    if (suiteId) {
      const suite = await this.suiteRepo.findById(suiteId);
      if (!suite || suite.projectId !== projectId) {
        throw Object.assign(new Error('Suite not found'), { statusCode: 404 });
      }
    }
    return this.sectionRepo.findBySuite(suiteId!, projectId);
  }

  async createSection(data: { name: string; suiteId: number; projectId: number }) {
    const suite = await this.suiteRepo.findById(data.suiteId);
    if (!suite || suite.projectId !== data.projectId) {
      throw Object.assign(new Error('Suite not found'), { statusCode: 404 });
    }
    return this.sectionRepo.create(data);
  }

  async updateSection(id: number, projectId: number, data: { name?: string | undefined }) {
    const existing = await this.sectionRepo.findById(id);
    if (!existing || existing.projectId !== projectId) {
      throw Object.assign(new Error('Section not found'), { statusCode: 404 });
    }
    return this.sectionRepo.update(id, data);
  }

  async deleteSection(id: number, projectId: number) {
    const existing = await this.sectionRepo.findById(id);
    if (!existing || existing.projectId !== projectId) {
      throw Object.assign(new Error('Section not found'), { statusCode: 404 });
    }
    await this.sectionRepo.deleteWithCascade(id);
  }
}
