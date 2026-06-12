import { z } from 'zod';

export enum TestCasePriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export enum TestCaseType {
  Functional = 'Functional',
  Performance = 'Performance',
  Security = 'Security',
  Regression = 'Regression',
  Smoke = 'Smoke',
  Integration = 'Integration',
}

export interface TestSuiteDTO {
  id: number;
  name: string;
  description?: string;
  projectId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TestSectionDTO {
  id: number;
  name: string;
  suiteId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TestCaseDTO {
  id: number;
  title: string;
  description?: string;
  preconditions?: string;
  steps: string[];
  expectedResult?: string;
  priority: string;
  type: string;
  sectionId: number;
  suiteId: number;
  projectId: number;
  customFieldValues?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTestCaseRequestDTO {
  title: string;
  description?: string;
  preconditions?: string;
  steps?: string[];
  expectedResult?: string;
  priority?: string;
  type?: string;
  projectId: number;
  sectionId: number;
  suiteId: number;
  customFieldValues?: Record<string, unknown>;
}

export interface UpdateTestCaseRequestDTO {
  title?: string;
  description?: string;
  preconditions?: string;
  steps?: string[];
  expectedResult?: string;
  priority?: string;
  type?: string;
  customFieldValues?: Record<string, unknown>;
}

export interface CreateSuiteRequestDTO {
  name: string;
  description?: string;
  projectId: number;
}

export interface CreateSectionRequestDTO {
  name: string;
  suiteId: number;
}

export const CreateTestCaseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  description: z.string().optional(),
  preconditions: z.string().optional(),
  steps: z.array(z.string()).optional(),
  expectedResult: z.string().optional(),
  priority: z.string().optional(),
  type: z.string().optional(),
  projectId: z.number(),
  sectionId: z.number(),
  suiteId: z.number(),
  customFieldValues: z.record(z.string(), z.unknown()).optional(),
});

export const CreateSuiteSchema = z.object({
  name: z.string().min(1, 'Suite name is required').max(255),
  description: z.string().optional(),
  projectId: z.number(),
});

export const CreateSectionSchema = z.object({
  name: z.string().min(1, 'Section name is required').max(255),
  suiteId: z.number(),
});
