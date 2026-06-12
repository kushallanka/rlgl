export interface JwtUser {
  userId: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  systemPermissions?: string[];
}

export interface RequestWithUser {
  user?: JwtUser;
  requestId?: string;
  projectId?: number;
  eventBus?: any;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortOrder?: 'asc' | 'desc' | undefined;
  search?: string | undefined;
}
