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
 *     TestRunInput:
 *       type: object
 *       required:
 *         - name
 *         - projectId
 *         - caseIds
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 200
 *         description:
 *           type: string
 *           maxLength: 500
 *         projectId:
 *           type: integer
 *         suiteId:
 *           type: integer
 *         caseIds:
 *           type: array
 *           description: One or more test case IDs to include in the run
 *           items:
 *             type: integer
 *     UpdateTestRunInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         version:
 *           type: integer
 *           description: Optimistic-concurrency token; update fails with 409 if stale
 *     UpdateResultInput:
 *       type: object
 *       required:
 *         - status
 *       properties:
 *         status:
 *           type: string
 *           enum: [Passed, Failed, Blocked, Untested]
 *         comment:
 *           type: string
 *           maxLength: 1000
 *         version:
 *           type: integer
 *           description: Optimistic-concurrency token; update fails with 409 if stale
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

  /**
   * @swagger
   * /:
   *   post:
   *     summary: Create a new test run
   *     tags: [TestRuns]
   *     parameters:
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: header
   *         name: Idempotency-Key
   *         schema:
   *           type: string
   *         description: Optional key to make run creation idempotent on retry
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/TestRunInput'
   *     responses:
   *       201:
   *         description: Created test run
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/TestRun'
   *       400:
   *         description: Validation failed or invalid case IDs
   *       403:
   *         description: projectId mismatch with x-project-id header
   */
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

  /**
   * @swagger
   * /{id}:
   *   get:
   *     summary: Get a single test run (with its results) by ID
   *     tags: [TestRuns]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Test run
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/TestRun'
   *       404:
   *         description: Test run not found
   */
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

  /**
   * @swagger
   * /{id}:
   *   put:
   *     summary: Update a test run's metadata
   *     tags: [TestRuns]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateTestRunInput'
   *     responses:
   *       200:
   *         description: Updated test run
   *       404:
   *         description: Test run not found
   *       409:
   *         description: Version conflict (optimistic concurrency)
   */
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

  /**
   * @swagger
   * /{id}:
   *   delete:
   *     summary: Delete a test run
   *     tags: [TestRuns]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       204:
   *         description: Deleted
   *       404:
   *         description: Test run not found
   */
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

  /**
   * @swagger
   * /results/{resultId}:
   *   put:
   *     summary: Record or update the outcome of a single test result
   *     tags: [TestRuns]
   *     parameters:
   *       - in: path
   *         name: resultId
   *         required: true
   *         schema:
   *           type: integer
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateResultInput'
   *     responses:
   *       200:
   *         description: Updated test result
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/TestResult'
   *       404:
   *         description: Test result not found
   *       409:
   *         description: Version conflict (optimistic concurrency)
   */
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
