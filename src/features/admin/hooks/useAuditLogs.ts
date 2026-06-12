import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../api/admin.api';

const AUDIT_LOGS_QUERY_KEY = (projectId: string | null) => ['audit-logs', projectId];

export function useAuditLogsQuery(projectId: string | null) {
  return useQuery({
    queryKey: AUDIT_LOGS_QUERY_KEY(projectId),
    queryFn: async () => {
      if (!projectId) return [];
      const res = await adminApi.getAuditLogs(projectId);
      return (res.data?.data || res.data || []) as any[];
    },
    enabled: !!projectId,
  });
}
