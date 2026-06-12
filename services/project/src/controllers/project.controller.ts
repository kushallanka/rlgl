import { Request, Response, NextFunction } from 'express';
import { EventBus } from '@rlgl/shared';
import { ProjectService } from '../services/project.service.js';

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Project management and configuration
 * 
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *     CreateProjectRequest:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 */
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    _eventBus: EventBus
  ) {}

  listInternal = async (_req: Request, res: Response) => {
    const projects = await this.service.listAll();
    return res.json(projects);
  };

  /**
   * @swagger
   * /:
   *   get:
   *     summary: List projects for current user
   *     tags: [Projects]
   *     responses:
   *       200:
   *         description: List of projects
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: '#/components/schemas/Project'
   */
  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId: userIdStr } = (req as any).context || {};
      const userId = parseInt(userIdStr, 10);
      if (!userId) {
        return res.status(401).json({ error: 'Not authenticated' });
      }
      const projects = await this.service.listProjects(userId);
      return res.json({ data: projects });
    } catch (err) { return next(err); }
  };

  /**
   * @swagger
   * /{id}:
   *   get:
   *     summary: Get a single project by ID
   *     tags: [Projects]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Project details
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Project'
   *       404:
   *         description: Project not found
   */
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.id ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const project = await this.service.getProject(projectId);
      return res.json(project);
    } catch (err) { return next(err); }
  };

  /**
   * @swagger
   * /:
   *   post:
   *     summary: Create a new project
   *     tags: [Projects]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateProjectRequest'
   *     responses:
   *       201:
   *         description: Project created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Project'
   *       403:
   *         description: Forbidden - Insufficient permissions
   */
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const context = (req as any).context;
      const { userId, systemPermissions } = context || {};
      if (!userId) {
        return res.status(401).json({ error: 'Not authenticated' });
      }
      // Check if user has permission to create projects
      if (!systemPermissions?.includes('system.project.create')) {
        return res.status(403).json({ error: 'You do not have permission to create projects. Please contact an administrator.' });
      }
      const project = await this.service.createProject(userId, req.body, context);
      return res.status(201).json(project);
    } catch (err) { return next(err); }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const context = (req as any).context;
      const projectId = parseInt(req.params.id ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const project = await this.service.updateProject(projectId, req.body, context);
      return res.json(project);
    } catch (err) { return next(err); }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.id ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      await this.service.deleteProject(projectId);
      return res.status(204).send();
    } catch (err) { return next(err); }
  };

  getSchema = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const schema = await this.service.getSchema(projectId);
      return res.json(schema);
    } catch (err) { return next(err); }
  };

  getMyPermissions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId: userIdStr, systemPermissions } = (req as any).context || {};
      const userId = parseInt(userIdStr, 10);
      if (!userId) {
        return res.status(401).json({ error: 'Not authenticated' });
      }
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId) || isNaN(userId)) return res.status(400).json({ error: 'Invalid ID format' });

      // Admins (system.project.create) get all project permissions
      if (Array.isArray(systemPermissions) && systemPermissions.includes('system.project.create')) {
        return res.json({
          permissions: [
            'testcase.view', 'testcase.create', 'testcase.edit', 'testcase.delete',
            'testrun.view', 'testrun.create', 'testrun.update', 'testrun.delete',
            'config.manage', 'project.manage', 'member.manage',
          ],
        });
      }

      const body = await this.service.getMyPermissions(userId, projectId);
      return res.json(body);
    } catch (err) {
      return next(err);
    }
  };

  getRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const roles = await this.service.getRoles(projectId);
      return res.json(roles);
    } catch (err) {
      return next(err);
    }
  };

  createRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const { name, description, permissions } = req.body;
      const role = await this.service.createRole(projectId, { name, description, permissions });
      return res.status(201).json(role);
    } catch (err) {
      return next(err);
    }
  };

  updateRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roleId = parseInt(req.params.roleId ?? '', 10);
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(roleId) || isNaN(projectId)) return res.status(400).json({ error: 'Invalid IDs' });
      const { name, description, permissions } = req.body;
      const role = await this.service.updateRole(roleId, projectId, { name, description, permissions });
      return res.json(role);
    } catch (err) {
      return next(err);
    }
  };

  deleteRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roleId = parseInt(req.params.roleId ?? '', 10);
      if (isNaN(roleId)) return res.status(400).json({ error: 'Invalid role ID' });
      await this.service.deleteRole(roleId);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  };

  getUserRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const userRoles = await this.service.getUserRoles(projectId);
      return res.json(userRoles);
    } catch (err) {
      return next(err);
    }
  };

  assignUserRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const context = (req as any).context;
      const projectId = parseInt(req.params.projectId ?? '', 10);
      const userId = parseInt(req.params.userId ?? '', 10);
      const { roleId } = req.body;
      if (isNaN(projectId) || isNaN(userId)) return res.status(400).json({ error: 'Invalid ID format' });
      const userRole = await this.service.assignUserRole(projectId, userId, roleId, context);
      return res.status(201).json(userRole);
    } catch (err: any) {
      if (err.code === 'P2002') {
        return res.status(400).json({ error: 'User already has this role' });
      }
      return next(err);
    }
  };

  removeUserRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const context = (req as any).context;
      const projectId = parseInt(req.params.projectId ?? '', 10);
      const userId = parseInt(req.params.userId ?? '', 10);
      const roleId = parseInt(req.params.roleId ?? '', 10);
      if (isNaN(projectId) || isNaN(userId) || isNaN(roleId)) return res.status(400).json({ error: 'Invalid ID format' });
      await this.service.removeUserRole(projectId, userId, roleId, context);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  };

  getActivities = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const authHeader = req.headers.authorization;
      const authToken = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : undefined;
      const activities = await this.service.getActivities(projectId, authToken);
      return res.json(activities);
    } catch (err) {
      return next(err);
    }
  };

  // Test Case Types
  createType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const { name, description, color } = req.body;
      const type = await this.service.createType(projectId, { name, description, color });
      return res.status(201).json(type);
    } catch (err) {
      return next(err);
    }
  };

  updateType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const typeId = parseInt(req.params.typeId ?? '', 10);
      if (isNaN(typeId)) return res.status(400).json({ error: 'Invalid type ID' });
      const { name, description, color } = req.body;
      const type = await this.service.updateType(typeId, { name, description, color });
      return res.json(type);
    } catch (err) {
      return next(err);
    }
  };

  deleteType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const typeId = parseInt(req.params.typeId ?? '', 10);
      if (isNaN(typeId)) return res.status(400).json({ error: 'Invalid type ID' });
      await this.service.deleteType(typeId);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  };

  // Priorities
  createPriority = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const { name, level, color } = req.body;
      const priority = await this.service.createPriority(projectId, { name, level, color });
      return res.status(201).json(priority);
    } catch (err) {
      return next(err);
    }
  };

  updatePriority = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const priorityId = parseInt(req.params.priorityId ?? '', 10);
      if (isNaN(priorityId)) return res.status(400).json({ error: 'Invalid priority ID' });
      const { name, level, color } = req.body;
      const priority = await this.service.updatePriority(priorityId, { name, level, color });
      return res.json(priority);
    } catch (err) {
      return next(err);
    }
  };

  deletePriority = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const priorityId = parseInt(req.params.priorityId ?? '', 10);
      if (isNaN(priorityId)) return res.status(400).json({ error: 'Invalid priority ID' });
      await this.service.deletePriority(priorityId);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  };

  // Custom Fields
  createCustomField = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId = parseInt(req.params.projectId ?? '', 10);
      if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
      const { name, type: fieldType, required, description } = req.body;
      const field = await this.service.createCustomField(projectId, { name, fieldType, required, description });
      return res.status(201).json(field);
    } catch (err) {
      return next(err);
    }
  };

  updateCustomField = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fieldId = parseInt(req.params.fieldId ?? '', 10);
      if (isNaN(fieldId)) return res.status(400).json({ error: 'Invalid field ID' });
      const { name, type: fieldType, required, description } = req.body;
      const field = await this.service.updateCustomField(fieldId, { name, fieldType, required, description });
      return res.json(field);
    } catch (err) {
      return next(err);
    }
  };

  deleteCustomField = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fieldId = parseInt(req.params.fieldId ?? '', 10);
      if (isNaN(fieldId)) return res.status(400).json({ error: 'Invalid field ID' });
      await this.service.deleteCustomField(fieldId);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  };
}
