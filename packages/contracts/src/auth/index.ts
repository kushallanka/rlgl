import { z } from 'zod';

/**
 * Shared Auth DTOs - Used across frontend/backend
 * Prevents drift in auth contract
 */

// ─── Enums ──────────────────────────────────────────────────────────────────
export enum UserRole {
  Admin = 'ADMIN',
  Tester = 'TESTER',
  Manager = 'MANAGER',
  Viewer = 'VIEWER',
}

export enum SystemPermission {
  SystemUserView = 'system.user.view',
  SystemUserCreate = 'system.user.create',
  SystemUserManage = 'system.user.manage',
}

// ─── DTOs ───────────────────────────────────────────────────────────────────
export interface AuthUserDTO {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  systemPermissions: SystemPermission[];
  createdAt?: Date;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  user: AuthUserDTO;
  accessToken: string;
  refreshToken: string;
}

export interface SignupRequestDTO {
  email: string;
  password: string;
  name: string;
}

export interface RefreshTokenRequestDTO {
  refreshToken: string;
}

export interface RefreshTokenResponseDTO {
  accessToken: string;
  refreshToken: string;
}

// ─── Zod Schemas ────────────────────────────────────────────────────────────
export const LoginRequestSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const SignupRequestSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

// ─── Type Guards ────────────────────────────────────────────────────────────
export function isAuthUserDTO(obj: any): obj is AuthUserDTO {
  return (
    obj &&
    typeof obj.id === 'number' &&
    typeof obj.email === 'string' &&
    typeof obj.role === 'string'
  );
}
