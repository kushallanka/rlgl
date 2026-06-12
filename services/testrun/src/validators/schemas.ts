import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  search: z.string().optional(),
});

export const TestRunSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(500).optional(),
  projectId: z.coerce.number().int().positive(),
  suiteId: z.coerce.number().int().positive().optional(),
  caseIds: z.array(z.coerce.number().int().positive()).min(1, 'At least one test case is required'),
});

export const UpdateResultSchema = z.object({
  status: z.enum(['Passed', 'Failed', 'Blocked', 'Untested']),
  comment: z.string().max(1000).optional(),
  // Optimistic concurrency: when supplied, the update only applies if the
  // row still has this version; otherwise the API responds 409.
  version: z.coerce.number().int().positive().optional(),
});

export const UpdateTestRunSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().max(500).optional(),
  version: z.coerce.number().int().positive().optional(),
});
