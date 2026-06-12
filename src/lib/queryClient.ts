import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30 seconds
      gcTime: 5 * 60_000,
      retry: 1,
      refetchOnWindowFocus: false, // Disable to prevent random refetches
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 0,
    },
  },
});
