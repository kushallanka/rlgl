import type { PrismaClient } from '../../generated/client/index.js';

export type OrgCreateInput = {
  name: string;
  slug: string;
  plan?: string;
  creatorUserId: number;
};

export type OrgUpdateInput = {
  name?: string;
  plan?: string;
  expectedVersion: number;
};

export class OrgRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: OrgCreateInput) {
    return this.prisma.$transaction(async (tx) => {
      const org = await tx.organization.create({
        data: {
          name: data.name,
          slug: data.slug,
          plan: data.plan ?? 'free',
        },
      });

      await tx.organizationMember.create({
        data: {
          orgId: org.id,
          userId: data.creatorUserId,
          role: 'owner',
          acceptedAt: new Date(),
        },
      });

      await tx.orgAuditLog.create({
        data: {
          orgId: org.id,
          actorId: data.creatorUserId,
          action: 'ORG_CREATED',
          targetType: 'Organization',
          targetId: String(org.id),
          metadata: JSON.stringify({ name: org.name, slug: org.slug }),
        },
      });

      return org;
    });
  }

  findById(orgId: number) {
    return this.prisma.organization.findFirst({
      where: { id: orgId, deletedAt: null },
      include: { members: { include: { User: { select: { id: true, email: true, firstName: true, lastName: true } } } } },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.organization.findFirst({
      where: { slug, deletedAt: null },
    });
  }

  listForUser(userId: number) {
    return this.prisma.organization.findMany({
      where: {
        deletedAt: null,
        members: { some: { userId } },
      },
      include: {
        members: {
          where: { userId },
          select: { role: true, acceptedAt: true },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  // Compare-and-swap update: returns null on version conflict → HTTP 409
  async update(orgId: number, data: OrgUpdateInput, actorId: number) {
    const { expectedVersion, ...fields } = data;

    const { count } = await this.prisma.organization.updateMany({
      where: { id: orgId, version: expectedVersion, deletedAt: null },
      data: { ...fields, version: { increment: 1 }, updatedAt: new Date() },
    });

    if (count === 0) return null;

    await this.prisma.orgAuditLog.create({
      data: {
        orgId,
        actorId,
        action: 'ORG_UPDATED',
        targetType: 'Organization',
        targetId: String(orgId),
        metadata: JSON.stringify(fields),
      },
    });

    return this.prisma.organization.findUnique({ where: { id: orgId } });
  }

  // Soft delete — never hard delete organizations (audit history must survive)
  async softDelete(orgId: number, actorId: number) {
    await this.prisma.$transaction(async (tx) => {
      await tx.organization.update({
        where: { id: orgId },
        data: { deletedAt: new Date(), updatedAt: new Date() },
      });

      await tx.orgAuditLog.create({
        data: {
          orgId,
          actorId,
          action: 'ORG_DELETED',
          targetType: 'Organization',
          targetId: String(orgId),
        },
      });
    });
  }

  async addMember(orgId: number, userId: number, role: string, actorId: number) {
    const member = await this.prisma.organizationMember.upsert({
      where: { orgId_userId: { orgId, userId } },
      create: { orgId, userId, role, acceptedAt: new Date() },
      update: { role },
    });

    await this.prisma.orgAuditLog.create({
      data: {
        orgId,
        actorId,
        action: 'MEMBER_ADDED',
        targetType: 'User',
        targetId: String(userId),
        metadata: JSON.stringify({ role }),
      },
    });

    return member;
  }

  async removeMember(orgId: number, userId: number, actorId: number) {
    await this.prisma.$transaction(async (tx) => {
      await tx.organizationMember.delete({
        where: { orgId_userId: { orgId, userId } },
      });

      await tx.orgAuditLog.create({
        data: {
          orgId,
          actorId,
          action: 'MEMBER_REMOVED',
          targetType: 'User',
          targetId: String(userId),
        },
      });
    });
  }

  getMemberRole(orgId: number, userId: number) {
    return this.prisma.organizationMember.findUnique({
      where: { orgId_userId: { orgId, userId } },
      select: { role: true },
    });
  }

  getAuditLog(orgId: number, skip: number, take: number) {
    return this.prisma.orgAuditLog.findMany({
      where: { orgId },
      orderBy: { createdAt: 'desc' },
      skip,
      take,
    });
  }
}
