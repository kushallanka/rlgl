import { Request, Response } from 'express';
import { SyncService } from '../services/sync.service.js';

export class SyncController {
  constructor(
    private readonly syncService: SyncService,
    _logger: unknown,
  ) {}

  syncProject = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId || `tc-sync-${Date.now()}`;
    const { projectId, name } = req.body;

    const result = await this.syncService.syncProject(projectId, name, requestId);
    if (result.error) {
      return res
        .status(result.status)
        .json({ error: result.error, ...('details' in result ? { details: result.details } : {}) });
    }
    return res.status(200).json(result.data);
  };

  deleteProject = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId || `tc-sync-${Date.now()}`;
    const projectId = parseInt(req.params.projectId ?? '', 10);

    if (Number.isNaN(projectId)) {
      return res.status(400).json({ error: 'Invalid projectId' });
    }

    const result = await this.syncService.deleteProject(projectId, requestId);
    if (result.error) {
      return res.status(result.status).json({ error: result.error });
    }
    return res.status(204).send();
  };
}
