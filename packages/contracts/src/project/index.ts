import { z } from 'zod';

/**
 * Shared Project DTOs - Used across frontend/backend
 * Strict boundaries prevent accidental schema changes
 */

// ─── Enums ──────────────────────────────────────────────────────────────────
export enum ProjectPermission {
  // TestCase
  TestCaseView = 'testcase.view',
  TestCaseCreate = 'testcase.create',
  TestCaseEdit = 'testcase.edit',
  TestCaseDelete = 'testcase.delete',
  // TestRun
  TestRunView = 'testrun.view',
  TestRunCreate = 'testrun.create',
  TestRunUpdate = 'testrun.update',
  // Config
  ConfigManage = 'config.manage',
  // Project
  ProjectManage = 'project.manage',
  // Member
  MemberManage = 'member.manage',
}

// ─── DTOs ───────────────────────────────────────────────────────────────────
export interface ProjectDTO {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProjectRequestDTO {
  name: string;
  description?: string;
}

export interface UpdateProjectRequestDTO {
  name?: string;
  description?: string;
}

export interface ProjectMemberDTO {
  id: number;
  userId: number;
  projectId: number;
  roleId: number;
  user?: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    name?: string;
  };
  role?: {
    id: number;
    name: string;
    permissions: ProjectPermission[];
  };
  joinedAt: Date;
}

export interface ProjectPermissionsResponseDTO {
  projectId: number;
  permissions: ProjectPermission[];
  roles: Array<{
    id: number;
    name: string;
    permissions: ProjectPermission[];
  }>;
}

// ─── Zod Schemas ────────────────────────────────────────────────────────────
export const CreateProjectRequestSchema = z.object({
  name: z.string().min(1, 'Project name is required').max(255),
  description: z.string().optional(),
});

export const UpdateProjectRequestSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
});

// ─── Type Guards ────────────────────────────────────────────────────────────
export function isProjectDTO(obj: any): obj is ProjectDTO {
  return obj && typeof obj.id === 'number' && typeof obj.name === 'string';
}
