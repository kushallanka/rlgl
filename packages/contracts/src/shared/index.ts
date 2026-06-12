import { z } from 'zod';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiErrorResponse {
  error: string;
  message?: string;
  statusCode: number;
  details?: Record<string, string[]>;
}

export interface ApiSuccessResponse<T> {
  data: T;
  message?: string;
}

export interface IdResponse {
  id: number;
}

export const PaginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
});

export const IdSchema = z.object({
  id: z.number().int().positive(),
});
