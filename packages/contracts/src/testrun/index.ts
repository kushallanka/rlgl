import { z } from 'zod';

export enum TestResultStatus {
  Untested = 'Untested',
  Passed = 'Passed',
  Failed = 'Failed',
  Blocked = 'Blocked',
  NotApplicable = 'NotApplicable',
}

export interface TestRunDTO {
  id: number;
  name: string;
  description?: string;
  projectId: number;
  suiteId: number;
  status: string;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface TestResultDTO {
  id: number;
  testRunId: number;
  testCaseId: number;
  status: TestResultStatus;
  notes?: string;
  assignedTo?: number;
  executedBy?: number;
  executedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTestRunRequestDTO {
  name: string;
  description?: string;
  projectId: number;
  suiteId: number;
  caseIds: number[];
}

export interface UpdateTestResultRequestDTO {
  status: TestResultStatus;
  notes?: string;
  assignedTo?: number;
}

export const CreateTestRunSchema = z.object({
  name: z.string().min(1, 'Test run name is required').max(255),
  description: z.string().optional(),
  projectId: z.number(),
  suiteId: z.number(),
  caseIds: z.array(z.number()).min(1, 'At least one test case is required'),
});

export const UpdateTestResultSchema = z.object({
  status: z.nativeEnum(TestResultStatus),
  notes: z.string().optional(),
  assignedTo: z.number().optional(),
});
