import { Request, Response } from 'express';
import { SuiteService } from '../services/suite.service.js';
import { IdempotencyService } from '../middleware/idempotency.js';
import { PaginationSchema, SuiteSchema, UpdateSuiteSchema } from '../validators/schemas.js';

/**
 * @swagger
 * tags:
 *   name: TestCases
 *   description: Test Case management (Suites, Sections, Cases)
 * 
 * components:
 *   schemas:
 *     Suite:
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
 *     Section:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         suiteId:
 *           type: integer
 *     SuiteInput:
 *       type: object
 *       required:
 *         - name
 *         - projectId
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 100
 *         description:
 *           type: string
 *           maxLength: 500
 *         projectId:
 *           type: integer
 *     SectionInput:
 *       type: object
 *       required:
 *         - name
 *         - suiteId
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 100
 *         suiteId:
 *           type: integer
 */
export class SuiteController {
  constructor(
    private readonly suiteService: SuiteService,
    private readonly idempotency: IdempotencyService,
    private readonly logger: any,
  ) {}

  /**
   * @swagger
   * /suites:
   *   get:
   *     summary: List all test suites in a project
   *     tags: [TestCases]
   *     parameters:
   *       - in: header
   *         name: x-project-id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *       - in: query
   *         name: limit
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: List of suites
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: '#/components/schemas/Suite'
   */
  listSuites = async (req: Request, res: Response) => {
    const projectId = (req as any).projectId;
    const requestId = (req as any).requestId;
    const { userId } = (req as any).user;
    const paginationResult = PaginationSchema.safeParse(req.query);
    const { page, limit, search } = paginationResult.success
      ? paginationResult.data
      : { page: 1, limit: 20, search: undefined };

    try {
      const result = await this.suiteService.listSuites(projectId, page, limit, search);
      this.logger.info?.('Suites listed', { requestId, userId, projectId, count: result.data.length });
      return res.json(result);
    } catch (err: any) {
      this.logger.error?.('List suites error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to fetch suites' });
    }
  };

  /**
   * @swagger
   * /suites:
   *   post:
   *     summary: Create a new test suite
   *     tags: [TestCases]
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
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/SuiteInput'
   *     responses:
   *       201:
   *         description: Created suite
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Suite'
   *       403:
   *         description: projectId mismatch with x-project-id header
   */
  createSuite = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const { userId } = (req as any).user;
    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (idempotencyKey) {
      const cached = await this.idempotency.checkIdempotency(idempotencyKey, 'POST /suites');
      if (cached) return res.status(cached.statusCode).json(JSON.parse(cached.response));
    }

    const parsed = SuiteSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    const projectId = (req as any).projectId;
    if (parsed.data.projectId !== projectId) {
      return res.status(403).json({ error: 'projectId mismatch with x-project-id header' });
    }

    try {
      const suite = await this.suiteService.createSuite(parsed.data, requestId);
      await this.idempotency.storeIdempotency(idempotencyKey, 'POST /suites', 201, suite);
      this.logger.info?.('Suite created', { requestId, userId, projectId, suiteId: suite.id });
      return res.status(201).json(suite);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('Create suite error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to create suite' });
    }
  };

  /**
   * @swagger
   * /suites/{id}:
   *   put:
   *     summary: Update a test suite
   *     tags: [TestCases]
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
   *         description: Updated suite
   *       404:
   *         description: Suite not found
   *   delete:
   *     summary: Delete a test suite (cascades to its sections and cases)
   *     tags: [TestCases]
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
   *         description: Suite not found
   */
  updateSuite = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const suiteId = parseInt(req.params.id ?? '', 10);
    if (isNaN(suiteId)) return res.status(400).json({ error: 'Invalid suite ID' });

    const parsed = UpdateSuiteSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    try {
      const updated = await this.suiteService.updateSuite(suiteId, projectId, parsed.data, requestId);
      this.logger.info?.('Suite updated', { requestId, projectId, suiteId });
      return res.json(updated);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('Update suite error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to update suite' });
    }
  };

  deleteSuite = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const suiteId = parseInt(req.params.id ?? '', 10);
    if (isNaN(suiteId)) return res.status(400).json({ error: 'Invalid suite ID' });

    try {
      await this.suiteService.deleteSuite(suiteId, projectId, requestId);
      this.logger.info?.('Suite deleted with cascade', { requestId, projectId, suiteId });
      return res.status(204).send();
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.('Delete suite error', { requestId, error: err.message });
      return res.status(500).json({ error: 'Failed to delete suite' });
    }
  };

  listInternal = async (_req: Request, res: Response) => {
    try {
      const suites = await this.suiteService.listAllSuites();
      return res.json(suites);
    } catch (err: any) {
      return res.status(500).json({ error: 'Failed to fetch suites' });
    }
  };
}
