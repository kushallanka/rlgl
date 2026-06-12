import { Request, Response, NextFunction } from 'express';
import { TestRunService } from '../services/testrun.service.js';
import { PaginationSchema, TestRunSchema, UpdateResultSchema, UpdateTestRunSchema } from '../validators/schemas.js';

/**
 * @swagger
 * tags:
 *   name: TestRuns
 *   description: Test Execution and Results management
 * 
 * components:
 *   schemas:
 *     TestRun:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         projectId:
 *           type: integer
 *         status:
 *           type: string
 *           enum: [open, closed]
 *     TestResult:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         status:
 *           type: string
 *           enum: [passed, failed, blocked, skipped, untested]
 *         comment:
 *           type: string
 */
export class TestRunController {
  constructor(private readonly service: TestRunService) {}

  /**
   * @swagger
   * /:
   *   get:
   *     summary: List all test runs in a project
   *     tags: [TestRuns]
   *     parameters:
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: List of test runs
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/TestRun'
   */
  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = (req as any).projectId;
      const requestId = (req as any).requestId;
      const { userId } = (req as any).user;

      const paginationResult = PaginationSchema.safeParse(req.query);
      if (!paginationResult.success) {
        return res.status(400).json({ error: 'Invalid pagination parameters', details: paginationResult.error.flatten().fieldErrors });
      }
      const result = await this.service.listRuns(projectId, paginationResult.data, userId, requestId);
      return res.json(result);
    } catch (err) { return next(err); }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestId = (req as any).requestId;
      const user = (req as any).user;
      const projectId = (req as any).projectId;

      const parsed = TestRunSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
      }

      if (parsed.data.projectId !== projectId) {
        return res.status(403).json({ error: 'projectId mismatch with x-project-id header' });
      }

      const token = req.headers.authorization?.split(' ')[1] ?? '';
      const result = await this.service.createRun(parsed.data, user, projectId, requestId, token);

      if (result.error) {
        return res.status(result.status).json({ error: result.error, ...('invalidCaseIds' in result ? { invalidCaseIds: result.invalidCaseIds } : {}) });
      }

      return res.status(201).json(result.data);
    } catch (err) { return next(err); }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = (req as any).projectId;
      const requestId = (req as any).requestId;
      const runId = parseInt(req.params.id ?? '', 10);
      if (isNaN(runId)) return res.status(400).json({ error: 'Invalid run ID' });

      const run = await this.service.getRun(runId, projectId, requestId);
      if (!run) return res.status(404).json({ error: 'Test run not found' });
      return res.json(run);
    } catch (err) { return next(err); }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = (req as any).projectId;
      const requestId = (req as any).requestId;
      const runId = parseInt(req.params.id ?? '', 10);
      if (isNaN(runId)) return res.status(400).json({ error: 'Invalid run ID' });

      const parsed = UpdateTestRunSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
      }

      const result = await this.service.updateRun(runId, projectId, parsed.data, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error, ...('code' in result && result.code ? { code: result.code } : {}) });
      return res.json(result.data);
    } catch (err) { return next(err); }
  };

  deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = (req as any).projectId;
      const requestId = (req as any).requestId;
      const runId = parseInt(req.params.id ?? '', 10);
      if (isNaN(runId)) return res.status(400).json({ error: 'Invalid run ID' });

      const result = await this.service.deleteRun(runId, projectId, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error });
      return res.status(204).send();
    } catch (err) { return next(err); }
  };

  updateResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = (req as any).projectId;
      const requestId = (req as any).requestId;
      const { userId } = (req as any).user;
      const resultId = parseInt(req.params.resultId ?? '', 10);
      if (isNaN(resultId)) return res.status(400).json({ error: 'Invalid result ID' });

      const parsed = UpdateResultSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
      }

      const result = await this.service.updateResult(resultId, projectId, parsed.data, userId, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error, ...('code' in result && result.code ? { code: result.code } : {}) });
      return res.json(result.data);
    } catch (err) { return next(err); }
  };

  syncProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestId = (req as any).requestId || `tr-sync-${Date.now()}`;
      const { projectId, name } = req.body;
      const result = await this.service.syncProject(projectId, name, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error });
      return res.status(200).json(result.data);
    } catch (err) { return next(err); }
  };

  syncSuite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestId = (req as any).requestId || `tr-sync-${Date.now()}`;
      const { suiteId, projectId, name } = req.body;
      const result = await this.service.syncSuite(suiteId, projectId, name, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error });
      return res.status(200).json(result.data);
    } catch (err) { return next(err); }
  };

  deleteSyncedSuite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestId = (req as any).requestId || `tr-sync-${Date.now()}`;
      const suiteId = parseInt(req.params.suiteId ?? '', 10);
      if (isNaN(suiteId)) return res.status(400).json({ error: 'Invalid suiteId' });

      const result = await this.service.deleteSyncedSuite(suiteId, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error });
      return res.status(204).send();
    } catch (err) { return next(err); }
  };

  deleteSyncedProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestId = (req as any).requestId || `tr-sync-${Date.now()}`;
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid projectId' });

      const result = await this.service.deleteSyncedProject(projectId, requestId);
      if (result.error) return res.status(result.status).json({ error: result.error });
      return res.status(204).send();
    } catch (err) { return next(err); }
  };
}
