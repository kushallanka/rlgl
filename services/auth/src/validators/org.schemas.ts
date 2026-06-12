import { z } from 'zod';

export const CreateOrgSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().min(2).max(48).optional(),
});

export const UpdateOrgSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  plan: z.enum(['free', 'pro', 'enterprise']).optional(),
  // Optimistic concurrency: client must echo the version it read.
  // A mismatch means another writer got there first → 409 VERSION_CONFLICT.
  version: z.coerce.number().int().positive(),
});

export const AddMemberSchema = z.object({
  userId: z.coerce.number().int().positive(),
  role: z.enum(['owner', 'admin', 'member', 'viewer']).default('member'),
});

export const OrgIdParamSchema = z.object({
  orgId: z.coerce.number().int().positive(),
});

export const MemberParamsSchema = z.object({
  orgId: z.coerce.number().int().positive(),
  userId: z.coerce.number().int().positive(),
});

export const AuditLogQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
});
