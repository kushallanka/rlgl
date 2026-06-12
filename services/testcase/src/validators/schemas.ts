import { z } from 'zod';

// ─── Pagination Schema ────────────────────────────────────────────────────────
export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  search: z.string().optional(),
  priority: z.string().optional(),
  type: z.string().optional(),
});

// ─── Suite Schema ─────────────────────────────────────────────────────────────
export const SuiteSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  projectId: z.coerce.number().int().positive(),
});

export const UpdateSuiteSchema = SuiteSchema.partial().extend({
  projectId: z.string().optional(),
});

// ─── Section Schema ─────────────────────────────────────────────────────────────
export const SectionSchema = z.object({
  name: z.string().min(1).max(100),
  suiteId: z.coerce.number().int().positive(),
});

export const UpdateSectionSchema = SectionSchema.partial().extend({
  projectId: z.string().optional(),
  suiteId: z.coerce.number().int().positive().optional(),
});

// ─── Test Case Schema ─────────────────────────────────────────────────────────
export const TestCaseSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  preconditions: z.string().max(1000).optional(),
  steps: z.array(z.any()).min(1, 'At least one step is required'),
  expectedResult: z.string().max(1000).optional(),
  priority: z.string().optional(),
  type: z.string().optional(),
  sectionId: z.coerce.number().int().positive(),
  suiteId: z.coerce.number().int().positive(),
  projectId: z.coerce.number().int().positive(),
  customFieldValues: z.record(z.string(), z.any()).optional(),
});

export const UpdateTestCaseSchema = TestCaseSchema.partial().extend({
  projectId: z.string().optional(),
  // Optimistic concurrency: when supplied, the update only applies if the
  // row still has this version; otherwise the API responds 409.
  version: z.coerce.number().int().positive().optional(),
});
