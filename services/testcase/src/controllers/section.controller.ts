import { Request, Response } from 'express';
import { SectionService } from '../services/section.service.js';
import { IdempotencyService } from '../middleware/idempotency.js';
import { SectionSchema } from '../validators/schemas.js';
import { z } from 'zod';

const UpdateSectionSchema = SectionSchema.partial().extend({
  projectId: z.string().optional(),
  suiteId: z.coerce.number().int().positive().optional(),
});

export class SectionController {
  constructor(
    private readonly sectionService: SectionService,
    private readonly idempotency: IdempotencyService,
    private readonly logger: any,
  ) {}

  listSections = async (req: Request, res: Response) => {
    const projectId = (req as any).projectId;
    const requestId = (req as any).requestId;
    const suiteIdStr = req.query.suiteId as string | undefined;
    let suiteId: number | undefined;
    if (suiteIdStr) {
      suiteId = parseInt(suiteIdStr, 10);
      if (isNaN(suiteId)) return res.status(400).json({ error: 'Invalid suite ID' });
    }

    try {
      const sections = await this.sectionService.listSections(projectId, suiteId);
      return res.json(sections);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('List sections error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to fetch sections' });
    }
  };

  createSection = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const { userId } = (req as any).user;
    const projectId = (req as any).projectId;
    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (idempotencyKey) {
      const cached = await this.idempotency.checkIdempotency(idempotencyKey, 'POST /sections');
      if (cached) return res.status(cached.statusCode).json(JSON.parse(cached.response));
    }

    const parsed = SectionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    try {
      const section = await this.sectionService.createSection({
        ...parsed.data,
        projectId,
      });
      await this.idempotency.storeIdempotency(idempotencyKey, 'POST /sections', 201, section);
      this.logger.info?.('Section created', { requestId, userId, projectId });
      return res.status(201).json(section);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('Create section error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to create section' });
    }
  };

  updateSection = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const sectionId = parseInt(req.params.id ?? '', 10);
    if (isNaN(sectionId)) return res.status(400).json({ error: 'Invalid section ID' });

    const parsed = UpdateSectionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    try {
      const updated = await this.sectionService.updateSection(sectionId, projectId, { name: parsed.data.name });
      this.logger.info?.('Section updated', { requestId, projectId, sectionId });
      return res.json(updated);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('Update section error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to update section' });
    }
  };

  deleteSection = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const sectionId = parseInt(req.params.id ?? '', 10);
    if (isNaN(sectionId)) return res.status(400).json({ error: 'Invalid section ID' });

    try {
      await this.sectionService.deleteSection(sectionId, projectId);
      this.logger.info?.('Section deleted with cascade', { requestId, projectId, sectionId });
      return res.status(204).send();
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('Delete section error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to delete section' });
    }
  };
}
