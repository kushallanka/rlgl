import crypto from 'node:crypto';
import { EventBus } from '@rlgl/shared';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth.service.js';
import { IAMService } from '../services/iam.service.js';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and Identity Management
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         role:
 *           type: string
 *         systemPermissions:
 *           type: array
 *           items:
 *             type: string
 *     AuthResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: '#/components/schemas/User'
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 */
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly iamService: IAMService,
    private readonly eventBus?: EventBus,
  ) {}

  /**
   * @swagger
   * /signup:
   *   post:
   *     summary: Create a new user account
   *     tags: [Auth]
   *     security: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *               firstName:
   *                 type: string
   *               lastName:
   *                 type: string
   *     responses:
   *       200:
   *         description: User created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/AuthResponse'
   *       400:
   *         description: User already exists
   */
  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.signup(req.body);
      const tokens = await this.authService.generateTokenPair(user);
      this.setCookies(res, tokens);

      let sysPerms: string[] = [];
      try {
        const parsed = JSON.parse(user.systemPermissions || '[]');
        sysPerms = Array.isArray(parsed) ? parsed : [];
      } catch {
        sysPerms = (user.systemPermissions || '').split(',').filter(Boolean);
      }

      return res.json({
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role || 'user',
          systemPermissions: sysPerms,
        },
      });
    } catch (err: any) {
      if (err.code === 'P2002') return res.status(400).json({ error: 'User already exists' });
      return next(err);
    }
  };

  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Authenticate user and return tokens
   *     tags: [Auth]
   *     security: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: Login successful
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/AuthResponse'
   *       401:
   *         description: Invalid credentials
   */
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.login(req.body);
      const tokens = await this.authService.generateTokenPair(user);
      this.setCookies(res, tokens);

      // Publish event
      const context = (req as any).context;
      if (this.eventBus) {
        await this.eventBus.publishEvent(
          'auth.login',
          {
            userId: user.id,
            email: user.email,
            method: 'password',
          },
          {
            requestId: context?.requestId,
            userId: user.id.toString(),
          },
        );
      }

      let sysPerms: string[] = [];
      try {
        const parsed = JSON.parse(user.systemPermissions || '[]');
        sysPerms = Array.isArray(parsed) ? parsed : [];
      } catch {
        sysPerms = (user.systemPermissions || '').split(',').filter(Boolean);
      }

      return res.json({
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role || 'user',
          systemPermissions: sysPerms,
        },
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    } catch (err) {
      return next(err);
    }
  };

  /**
   * @swagger
   * /me:
   *   get:
   *     summary: Get current user context
   *     tags: [Auth]
   *     responses:
   *       200:
   *         description: Current user ID
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *       401:
   *         description: Not authenticated
   */
  me = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = (req as any).context;
      if (!userId) return res.status(401).json({ error: 'Not authenticated' });
      return res.json({ id: userId });
    } catch (err) {
      return next(err);
    }
  };

  /**
   * @swagger
   * /refresh:
   *   post:
   *     summary: Refresh access token using refresh token cookie
   *     tags: [Auth]
   *     security: []
   *     responses:
   *       200:
   *         description: Tokens refreshed successfully
   *       401:
   *         description: Invalid refresh token
   */
  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      const tokens = await this.authService.refresh(refreshToken);
      this.setCookies(res, tokens);
      return res.json({ success: true });
    } catch (err) {
      return next(err);
    }
  };

  /**
   * @swagger
   * /logout:
   *   post:
   *     summary: Log out user and clear cookies
   *     tags: [Auth]
   *     responses:
   *       200:
   *         description: Logged out successfully
   */
  logout = async (req: Request, res: Response) => {
    const context = (req as any).context;

    // Publish event
    if (this.eventBus && context?.userId) {
      await this.eventBus.publishEvent(
        'auth.logout',
        {
          userId: context.userId,
        },
        {
          requestId: context?.requestId,
          userId: context.userId,
        },
      );
    }

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.clearCookie('csrf-token');
    return res.json({ success: true });
  };

  /** IAM: used by project-service to resolve a user's project memberships */
  /**
   * @swagger
   * /users/{userId}/projects:
   *   get:
   *     summary: List project IDs for a user (IAM)
   *     tags: [IAM]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: List of project IDs
   */
  listUserProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.params;
      const userIdNum = parseInt(userId ?? '', 10);
      if (Number.isNaN(userIdNum)) return res.status(400).json({ error: 'Invalid user ID' });
      const projectIds = await this.iamService.listProjectIdsForUser(userIdNum);
      return res.json({ projectIds });
    } catch (err) {
      return next(err);
    }
  };

  /** IAM: permissions for one project (used by project-service GET .../permissions/mine) */
  /**
   * @swagger
   * /users/{userId}/projects/{projectId}/permissions:
   *   get:
   *     summary: Get permissions for a user in a project (IAM)
   *     tags: [IAM]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: integer
   *       - in: path
   *         name: projectId
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: List of permissions
   */
  getUserProjectPermissions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, projectId } = req.params;
      const userIdNum = parseInt(userId ?? '', 10);
      const projectIdNum = parseInt(projectId ?? '', 10);
      if (Number.isNaN(userIdNum) || Number.isNaN(projectIdNum))
        return res.status(400).json({ error: 'Invalid ID format' });
      const permissions = await this.iamService.getPermissions(userIdNum, projectIdNum);
      return res.json({ permissions });
    } catch (err) {
      return next(err);
    }
  };

  /** IAM: project-service calls after creating a project row */
  /**
   * @swagger
   * /internal/projects/{projectId}/init-admin:
   *   post:
   *     summary: Initialize project admin (Internal)
   *     tags: [IAM]
   *     parameters:
   *       - in: path
   *         name: projectId
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               userId:
   *                 type: integer
   *     responses:
   *       201:
   *         description: Admin initialized successfully
   */
  initProjectAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { projectId } = req.params;
      const userId = (req.body as { userId?: string })?.userId;
      const projectIdNum = parseInt(projectId ?? '', 10);
      const userIdNum = parseInt(userId ?? '', 10);
      if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
      }
      if (Number.isNaN(projectIdNum) || Number.isNaN(userIdNum))
        return res.status(400).json({ error: 'Invalid ID format' });
      await this.iamService.initProjectAdmin(projectIdNum, userIdNum);
      return res.status(201).json({ ok: true });
    } catch (err) {
      return next(err);
    }
  };

  /** List all users (for member management) */
  /**
   * @swagger
   * /users:
   *   get:
   *     summary: List all users
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: List of users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   */
  listUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.authService.listUsers();
      return res.json(users);
    } catch (err) {
      return next(err);
    }
  };

  private setCookies(res: Response, tokens: { accessToken: string; refreshToken: string }) {
    const isProd = process.env.NODE_ENV === 'production';
    const csrfToken = crypto.randomBytes(32).toString('hex');

    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie('csrf-token', csrfToken, {
      secure: isProd,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }
}
