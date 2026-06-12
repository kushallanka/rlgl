export const ADMIN_QUERY_KEYS = {
  config: (projectId: string | null) => ['config', projectId] as const,
  userRoles: (projectId: string | null) => ['userRoles', projectId] as const,
} as const;
