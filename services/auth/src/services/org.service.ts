import { createLogger, logAudit } from '@rlgl/shared';
import { OrgRepository } from '../repositories/org.repository.js';

const logger = createLogger({ service: 'auth-org-service' });

const RESERVED_SLUGS = new Set([
  'api',
  'admin',
  'auth',
  'www',
  'mail',
  'support',
  'help',
  'status',
  'blog',
  'docs',
  'billing',
  'app',
  'dashboard',
]);

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
}

type OrgServiceResult<T> = { ok: true; data: T } | { ok: false; status: number; error: string; code: string };

export class OrgService {
  constructor(private readonly repo: OrgRepository) {}

  async createOrg(
    name: string,
    slugInput: string | undefined,
    creatorUserId: number,
    requestId: string,
  ): Promise<OrgServiceResult<Awaited<ReturnType<OrgRepository['findById']>>>> {
    const slug = slugInput ? toSlug(slugInput) : toSlug(name);

    if (slug.length < 2) {
      return { ok: false, status: 400, error: 'Organization slug is too short', code: 'SLUG_INVALID' };
    }

    if (RESERVED_SLUGS.has(slug)) {
      return { ok: false, status: 400, error: `Slug "${slug}" is reserved`, code: 'SLUG_RESERVED' };
    }

    const existing = await this.repo.findBySlug(slug);
    if (existing) {
      return { ok: false, status: 409, error: `Organization slug "${slug}" is already taken`, code: 'SLUG_CONFLICT' };
    }

    const org = await this.repo.create({ name, slug, creatorUserId });
    logger.info({ requestId, orgId: org.id, slug, creatorUserId }, 'Organization created');

    const full = await this.repo.findById(org.id);
    return { ok: true, data: full };
  }

  async getOrg(orgId: number, requestingUserId: number, requestId: string) {
    const org = await this.repo.findById(orgId);
    if (!org) {
      return { ok: false as const, status: 404, error: 'Organization not found', code: 'ORG_NOT_FOUND' };
    }

    const membership = await this.repo.getMemberRole(orgId, requestingUserId);
    if (!membership) {
      return { ok: false as const, status: 403, error: 'Access denied', code: 'ORG_FORBIDDEN' };
    }

    logger.info({ requestId, orgId, requestingUserId }, 'Organization fetched');
    return { ok: true as const, data: org };
  }

  async listOrgsForUser(userId: number, requestId: string) {
    const orgs = await this.repo.listForUser(userId);
    logger.info({ requestId, userId, count: orgs.length }, 'Organizations listed for user');
    return { ok: true as const, data: orgs };
  }

  async updateOrg(
    orgId: number,
    updates: { name?: string; plan?: string },
    expectedVersion: number,
    actorId: number,
    requestId: string,
  ) {
    const membership = await this.repo.getMemberRole(orgId, actorId);
    if (!membership || !['owner', 'admin'].includes(membership.role)) {
      return {
        ok: false as const,
        status: 403,
        error: 'Only owners and admins can update organization',
        code: 'ORG_FORBIDDEN',
      };
    }

    const updated = await this.repo.update(orgId, { ...updates, expectedVersion }, actorId);
    if (!updated) {
      return {
        ok: false as const,
        status: 409,
        error: 'Version conflict — organization was modified by another request',
        code: 'VERSION_CONFLICT',
      };
    }

    logAudit(logger, 'ORG_UPDATED', { requestId, orgId, actorId, updates });
    return { ok: true as const, data: updated };
  }

  async addMember(orgId: number, targetUserId: number, role: string, actorId: number, requestId: string) {
    const actorMembership = await this.repo.getMemberRole(orgId, actorId);
    if (!actorMembership || !['owner', 'admin'].includes(actorMembership.role)) {
      return {
        ok: false as const,
        status: 403,
        error: 'Only owners and admins can add members',
        code: 'ORG_FORBIDDEN',
      };
    }

    if (!['owner', 'admin', 'member', 'viewer'].includes(role)) {
      return { ok: false as const, status: 400, error: `Invalid role: ${role}`, code: 'INVALID_ROLE' };
    }

    // Prevent privilege escalation: non-owners cannot assign owner role
    if (role === 'owner' && actorMembership.role !== 'owner') {
      return { ok: false as const, status: 403, error: 'Only owners can assign the owner role', code: 'ORG_FORBIDDEN' };
    }

    const member = await this.repo.addMember(orgId, targetUserId, role, actorId);
    logAudit(logger, 'ORG_MEMBER_ADDED', { requestId, orgId, targetUserId, role, actorId });
    return { ok: true as const, data: member };
  }

  async removeMember(orgId: number, targetUserId: number, actorId: number, requestId: string) {
    const actorMembership = await this.repo.getMemberRole(orgId, actorId);
    if (!actorMembership || !['owner', 'admin'].includes(actorMembership.role)) {
      return {
        ok: false as const,
        status: 403,
        error: 'Only owners and admins can remove members',
        code: 'ORG_FORBIDDEN',
      };
    }

    // Prevent removing last owner
    if (targetUserId === actorId && actorMembership.role === 'owner') {
      const org = await this.repo.findById(orgId);
      const owners = org?.members.filter((m: { role: string }) => m.role === 'owner') ?? [];
      if (owners.length <= 1) {
        return {
          ok: false as const,
          status: 400,
          error: 'Cannot remove the last owner of an organization',
          code: 'LAST_OWNER',
        };
      }
    }

    await this.repo.removeMember(orgId, targetUserId, actorId);
    logAudit(logger, 'ORG_MEMBER_REMOVED', { requestId, orgId, targetUserId, actorId });
    return { ok: true as const, data: { removed: true } };
  }

  async getAuditLog(orgId: number, actorId: number, page: number, limit: number) {
    const membership = await this.repo.getMemberRole(orgId, actorId);
    if (!membership || !['owner', 'admin'].includes(membership.role)) {
      return {
        ok: false as const,
        status: 403,
        error: 'Only owners and admins can view audit logs',
        code: 'ORG_FORBIDDEN',
      };
    }

    const logs = await this.repo.getAuditLog(orgId, (page - 1) * limit, limit);
    return { ok: true as const, data: logs };
  }
}
