export const PROJECT_QUERY_KEYS = {
  all: ['projects'] as const,
  list: () => [...PROJECT_QUERY_KEYS.all, 'list'] as const,
  detail: (id: string) => [...PROJECT_QUERY_KEYS.all, 'detail', id] as const,
  members: (id: string) => [...PROJECT_QUERY_KEYS.all, 'members', id] as const,
} as const;
