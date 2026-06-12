import { Request, Response } from 'express';
import { TestCaseService } from '../services/testcase.service.js';
import { IdempotencyService } from '../middleware/idempotency.js';
import { PaginationSchema, TestCaseSchema, UpdateTestCaseSchema } from '../validators/schemas.js';

/**
 * @swagger
 * /cases:
 *   get:
 *     summary: List test cases in a project (optionally filtered by suite or section)
 *     tags: [TestCases]
 *     parameters:
 *       - in: header
 *         name: x-project-id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: suiteId
 *         schema:
 *           type: integer
 *       - in: query
 *         name: sectionId
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated list of test cases
 *
 *   post:
 *     summary: Create a new test case
 *     tags: [TestCases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestCaseInput'
 *     responses:
 *       201:
 *         description: Created test case
 *
 * /cases/{id}:
 *   get:
 *     summary: Get a single test case by ID
 *     tags: [TestCases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Test case
 *       404:
 *         description: Not found
 *
 *   put:
 *     summary: Update a test case
 *     tags: [TestCases]
 *     responses:
 *       200:
 *         description: Updated test case
 *
 *   delete:
 *     summary: Soft-delete a test case
 *     tags: [TestCases]
 *     responses:
 *       204:
 *         description: Deleted
 */
export class TestCaseController {
  constructor(
    private readonly service: TestCaseService,
    private readonly idempotency: IdempotencyService,
    private readonly logger: any,
  ) {}

  list = async (req: Request, res: Response) => {
    const projectId = (req as any).projectId;
    const requestId = (req as any).requestId;

    const paginationResult = PaginationSchema.safeParse(req.query);
    const { page, limit, search } = paginationResult.success
      ? paginationResult.data
      : { page: 1, limit: 20, search: undefined };

    const suiteIdStr = req.query.suiteId as string | undefined;
    const sectionIdStr = req.query.sectionId as string | undefined;
    const suiteId = suiteIdStr ? parseInt(suiteIdStr, 10) : undefined;
    const sectionId = sectionIdStr ? parseInt(sectionIdStr, 10) : undefined;

    if (suiteIdStr && isNaN(suiteId!)) return res.status(400).json({ error: 'Invalid suiteId' });
    if (sectionIdStr && isNaN(sectionId!)) return res.status(400).json({ error: 'Invalid sectionId' });

    try {
      const result = await this.service.listCases(projectId, { suiteId, sectionId, search }, page, limit, requestId);
      return res.json(result);
    } catch (err: any) {
      this.logger.error?.({ requestId, err }, 'List test cases error');
      return res.status(500).json({ error: 'Failed to fetch test cases' });
    }
  };

  /**
   * Internal batch lookup used by the testrun service to snapshot cases at
   * run-creation time. Returns full case bodies plus any ids that no longer
   * exist, in a single round trip.
   */
  batchByIds = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const { ids, projectId } = req.body ?? {};

    if (!Array.isArray(ids) || ids.length === 0 || ids.length > 1000 || !ids.every(id => Number.isInteger(id) && id > 0)) {
      return res.status(400).json({ error: 'ids must be an array of 1-1000 positive integers' });
    }
    if (!Number.isInteger(projectId) || projectId <= 0) {
      return res.status(400).json({ error: 'projectId must be a positive integer' });
    }

    try {
      const { cases, missingIds } = await this.service.getCasesByIds(ids, projectId, requestId);
      return res.json({ data: cases, missingIds });
    } catch (err: any) {
      this.logger.error?.({ requestId, err }, 'Batch fetch test cases error');
      return res.status(500).json({ error: 'Failed to fetch test cases' });
    }
  };

  getById = async (req: Request, res: Response) => {
    const projectId = (req as any).projectId;
    const requestId = (req as any).requestId;
    const id = parseInt(req.params.id ?? '', 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid test case ID' });

    try {
      const tc = await this.service.getCase(id, projectId, requestId);
      if (!tc) return res.status(404).json({ error: 'Test case not found' });
      return res.json(tc);
    } catch (err: any) {
      this.logger.error?.({ requestId, err }, 'Get test case error');
      return res.status(500).json({ error: 'Failed to fetch test case' });
    }
  };

  create = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const user = (req as any).user;
    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (idempotencyKey) {
      const cached = await this.idempotency.checkIdempotency(idempotencyKey, 'POST /cases');
      if (cached) return res.status(cached.statusCode).json(JSON.parse(cached.response));
    }

    const parsed = TestCaseSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    if (parsed.data.projectId !== projectId) {
      return res.status(403).json({ error: 'projectId mismatch with x-project-id header' });
    }

    const createdBy = [user.firstName, user.lastName].filter(Boolean).join(' ') || user.email || 'Unknown';

    try {
      const tc = await this.service.createCase(parsed.data, createdBy, requestId);
      await this.idempotency.storeIdempotency(idempotencyKey, 'POST /cases', 201, tc);
      this.logger.info?.({ requestId, projectId, testCaseId: tc.id }, 'Test case created');
      return res.status(201).json(tc);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.({ requestId, err }, 'Create test case error');
      return res.status(500).json({ error: 'Failed to create test case' });
    }
  };

  update = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const user = (req as any).user;
    const id = parseInt(req.params.id ?? '', 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid test case ID' });

    const parsed = UpdateTestCaseSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors });
    }

    const updatedBy = [user.firstName, user.lastName].filter(Boolean).join(' ') || user.email || 'Unknown';

    try {
      const tc = await this.service.updateCase(id, projectId, parsed.data, updatedBy, requestId);
      this.logger.info?.({ requestId, projectId, testCaseId: id }, 'Test case updated');
      return res.json(tc);
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      if (err.statusCode === 409) return res.status(409).json({ error: err.message, code: err.code });
      this.logger.error?.({ requestId, err }, 'Update test case error');
      return res.status(500).json({ error: 'Failed to update test case' });
    }
  };

  delete = async (req: Request, res: Response) => {
    const requestId = (req as any).requestId;
    const projectId = (req as any).projectId;
    const id = parseInt(req.params.id ?? '', 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid test case ID' });

    try {
      await this.service.deleteCase(id, projectId, requestId);
      return res.status(204).send();
    } catch (err: any) {
      if (err.statusCode === 404) return res.status(404).json({ error: err.message });
      this.logger.error?.({ requestId, err }, 'Delete test case error');
      return res.status(500).json({ error: 'Failed to delete test case' });
    }
  };
}
