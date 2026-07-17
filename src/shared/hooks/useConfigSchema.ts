import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../constants';
import type { ConfigSchema } from '../../utils';
import { axios } from '../api/api';

export function useConfigSchema(projectId: string | null) {
  return useQuery<ConfigSchema | null>({
    queryKey: ['config-schema', projectId],
    queryFn: async () => {
      if (!projectId) return null;
      const res = await axios.get(API_ENDPOINTS.CONFIG_SCHEMA(projectId));
      return res.data ?? { types: [], priorities: [], customFields: [] };
    },
    enabled: !!projectId,
    staleTime: 60_000,
    placeholderData: { types: [], priorities: [], customFields: [] } as ConfigSchema,
  });
}
