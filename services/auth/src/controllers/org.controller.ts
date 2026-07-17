import { err, ok } from '@rlgl/shared';
import { NextFunction, Request, Response } from 'express';
import { OrgService } from '../services/org.service.js';
import {
  AddMemberSchema,
  AuditLogQuerySchema,
  CreateOrgSchema,
  MemberParamsSchema,
  OrgIdParamSchema,
  UpdateOrgSchema,
} from '../validators/org.schemas.js';

/**
 * @swagger
 * tags:
 *   name: Organizations
 *   description: Multi-tenant organization management
 *
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         plan:
 *           type: string
 *         version:
 *           type: integer
 */
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  /**
   * @swagger
   * /orgs:
   *   post:
   *     summary: Create a new organization (creator becomes owner)
   *     tags: [Organizations]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required: [name]
   *             properties:
   *               name:
   *                 type: string
   *               slug:
   *                 type: string
   *     responses:
   *       201:
   *         description: Organization created
   *       400:
   *         description: Invalid or reserved slug
   *       409:
   *         description: Slug already taken
   */
  createOrg = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const userId = this.requireUser(req, res, requestId);
      if (userId === null) return;

      const parsed = CreateOrgSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json(err('Invalid request body', 'VALIDATION_ERROR', requestId));
      }

      const result = await this.orgService.createOrg(parsed.data.name, parsed.data.slug, userId, requestId);
      if (!result.ok) {
        return res.status(result.status).json(err(result.error, result.code, requestId));
      }
      return res.status(201).json(ok(result.data));
    } catch (e) {
      return next(e);
    }
  };

  /**
   * @swagger
   * /orgs:
   *   get:
   *     summary: List organizations the current user belongs to
   *     tags: [Organizations]
   *     responses:
   *       200:
   *         description: Organizations for the current user
   *       401:
   *         description: Not authenticated
   */
  listOrgs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const userId = this.requireUser(req, res, requestId);
      if (userId === null) return;

      const result = await this.orgService.listOrgsForUser(userId, requestId);
      return res.json(ok(result.data));
    } catch (e) {
      return next(e);
    }
  };

  /**
   * @swagger
   * /orgs/{orgId}:
   *   get:
   *     summary: Get an organization (members only)
   *     tags: [Organizations]
   *     parameters:
   *       - in: path
   *         name: orgId
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Organization details
   *       403:
   *         description: Not a member
   *       404:
   *         description: Organization not found
   */
  getOrg = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const userId = this.requireUser(req, res, requestId);
      if (userId === null) return;

      const params = OrgIdParamSchema.safeParse(req.params);
      if (!params.success) {
        return res.status(400).json(err('Invalid organization ID', 'VALIDATION_ERROR', requestId));
      }

      const result = await this.orgService.getOrg(params.data.orgId, userId, requestId);
      if (!result.ok) {
        return res.status(result.status).json(err(result.error, result.code, requestId));
      }
      return res.json(ok(result.data));
    } catch (e) {
      return next(e);
    }
  };

  /**
   * @swagger
   * /orgs/{orgId}:
   *   patch:
   *     summary: Update an organization (owner/admin, optimistic concurrency)
   *     tags: [Organizations]
   *     parameters:
   *       - in: path
   *         name: orgId
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required: [version]
   *             properties:
   *               name:
   *                 type: string
   *               plan:
   *                 type: string
   *               version:
   *                 type: integer
   *                 description: Version the client last read (CAS)
   *     responses:
   *       200:
   *         description: Organization updated
   *       403:
   *         description: Insufficient role
   *       409:
   *         description: Version conflict
   */
  updateOrg = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const userId = this.requireUser(req, res, requestId);
      if (userId === null) return;

      const params = OrgIdParamSchema.safeParse(req.params);
      if (!params.success) {
        return res.status(400).json(err('Invalid organization ID', 'VALIDATION_ERROR', requestId));
      }

      const body = UpdateOrgSchema.safeParse(req.body);
      if (!body.success) {
        return res.status(400).json(err('Invalid request body — version is required', 'VALIDATION_ERROR', requestId));
      }

      const updates: { name?: string; plan?: string } = {};
      if (body.data.name !== undefined) updates.name = body.data.name;
      if (body.data.plan !== undefined) updates.plan = body.data.plan;

      const result = await this.orgService.updateOrg(params.data.orgId, updates, body.data.version, userId, requestId);
      if (!result.ok) {
        return res.status(result.status).json(err(result.error, result.code, requestId));
      }
      return res.json(ok(result.data));
    } catch (e) {
      return next(e);
    }
  };

  /**
   * @swagger
   * /orgs/{orgId}/members:
   *   post:
   *     summary: Add or update a member (owner/admin; only owners assign owner)
   *     tags: [Organizations]
   *     parameters:
   *       - in: path
   *         name: orgId
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required: [userId]
   *             properties:
   *               userId:
   *                 type: integer
   *               role:
   *                 type: string
   *                 enum: [owner, admin, member, viewer]
   *     responses:
   *       201:
   *         description: Member added
   *       403:
   *         description: Insufficient role or privilege escalation attempt
   */
  addMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const userId = this.requireUser(req, res, requestId);
      if (userId === null) return;

      const params = OrgIdParamSchema.safeParse(req.params);
      if (!params.success) {
        return res.status(400).json(err('Invalid organization ID', 'VALIDATION_ERROR', requestId));
      }

      const body = AddMemberSchema.safeParse(req.body);
      if (!body.success) {
        return res.status(400).json(err('Invalid request body', 'VALIDATION_ERROR', requestId));
      }

      const result = await this.orgService.addMember(
        params.data.orgId,
        body.data.userId,
        body.data.role,
        userId,
        requestId,
      );
      if (!result.ok) {
        return res.status(result.status).json(err(result.error, result.code, requestId));
      }
      return res.status(201).json(ok(result.data));
    } catch (e) {
      return next(e);
    }
  };

  /**
   * @swagger
   * /orgs/{orgId}/members/{userId}:
   *   delete:
   *     summary: Remove a member (owner/admin; last owner protected)
   *     tags: [Organizations]
   *     parameters:
   *       - in: path
   *         name: orgId
   *         required: true
   *         schema:
   *           type: integer
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Member removed
   *       400:
   *         description: Cannot remove the last owner
   *       403:
   *         description: Insufficient role
   */
  removeMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const actorId = this.requireUser(req, res, requestId);
      if (actorId === null) return;

      const params = MemberParamsSchema.safeParse(req.params);
      if (!params.success) {
        return res.status(400).json(err('Invalid ID format', 'VALIDATION_ERROR', requestId));
      }

      const result = await this.orgService.removeMember(params.data.orgId, params.data.userId, actorId, requestId);
      if (!result.ok) {
        return res.status(result.status).json(err(result.error, result.code, requestId));
      }
      return res.json(ok(result.data));
    } catch (e) {
      return next(e);
    }
  };

  /**
   * @swagger
   * /orgs/{orgId}/audit-log:
   *   get:
   *     summary: Read the append-only audit log (owner/admin only)
   *     tags: [Organizations]
   *     parameters:
   *       - in: path
   *         name: orgId
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
   *         description: Audit log entries, newest first
   *       403:
   *         description: Insufficient role
   */
  getAuditLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { requestId } = this.context(req);
      const userId = this.requireUser(req, res, requestId);
      if (userId === null) return;

      const params = OrgIdParamSchema.safeParse(req.params);
      if (!params.success) {
        return res.status(400).json(err('Invalid organization ID', 'VALIDATION_ERROR', requestId));
      }

      const query = AuditLogQuerySchema.safeParse(req.query);
      if (!query.success) {
        return res.status(400).json(err('Invalid pagination parameters', 'VALIDATION_ERROR', requestId));
      }

      const result = await this.orgService.getAuditLog(params.data.orgId, userId, query.data.page, query.data.limit);
      if (!result.ok) {
        return res.status(result.status).json(err(result.error, result.code, requestId));
      }
      return res.json(ok(result.data, { page: query.data.page, limit: query.data.limit }));
    } catch (e) {
      return next(e);
    }
  };

  private context(req: Request): { requestId: string } {
    const ctx = (req as { context?: { requestId?: string } }).context;
    return { requestId: ctx?.requestId ?? 'unknown' };
  }

  // Identity arrives as x-user-id propagated by the gateway after JWT
  // verification; missing or non-numeric means the caller is unauthenticated.
  private requireUser(req: Request, res: Response, requestId: string): number | null {
    const ctx = (req as { context?: { userId?: string } }).context;
    const userId = parseInt(ctx?.userId ?? '', 10);
    if (Number.isNaN(userId) || userId <= 0) {
      res.status(401).json(err('Not authenticated', 'UNAUTHENTICATED', requestId));
      return null;
    }
    return userId;
  }
}
