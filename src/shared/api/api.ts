import axiosLib, { InternalAxiosRequestConfig, AxiosError } from 'axios';

let isRefreshing = false;
let refreshSubscribers: Array<(err: unknown) => void> = [];

function onRefreshComplete(err: unknown) {
  refreshSubscribers.forEach((cb) => cb(err));
  refreshSubscribers = [];
}

const createApiClient = () => {
  const instance = axiosLib.create({
    baseURL: import.meta.env.VITE_API_URL || '/api/v1',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  };

  // Request interceptor: add request ID and project context
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const requestId =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`;
      if (config.headers) {
        config.headers['x-request-id'] = requestId;
        config.headers['x-request-sent-at'] = new Date().toISOString();
      }

      const activeProjectRaw = localStorage.getItem('activeProject');
      if (activeProjectRaw) {
        try {
          const project = JSON.parse(activeProjectRaw) as { id?: string };
          if (project?.id && config.headers && !config.headers['x-project-id']) {
            config.headers['x-project-id'] = project.id;
          }
        } catch {
          /* ignore */
        }
      }

      const csrfToken = getCookie('csrf-token');
      if (csrfToken && config.method) {
        if (['post', 'put', 'delete', 'patch'].includes(config.method)) {
          if (config.headers) {
            config.headers['x-csrf-token'] = csrfToken;
          }
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor: handle auth
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {

      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
      const message = error.response?.data
        ? typeof error.response.data === 'string'
          ? error.response.data
          : (error.response.data as { error?: string })?.error
        : 'An unexpected error occurred';

      // Skip token refresh for auth endpoints to prevent interference with login mutation
      const isAuthEndpoint = originalRequest?.url?.includes('/auth/login') || originalRequest?.url?.includes('/auth/refresh') || originalRequest?.url?.includes('/auth/signup');
      
      if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isAuthEndpoint) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            refreshSubscribers.push((err) => {
              if (err) reject(err);
              else resolve(instance(originalRequest));
            });
          });
        }

        isRefreshing = true;

        try {
          await instance.post('/auth/refresh');
          onRefreshComplete(null);
          isRefreshing = false;
          return instance(originalRequest);
        } catch (refreshError) {
          onRefreshComplete(refreshError);
          isRefreshing = false;
          localStorage.removeItem('user');
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }

      if (error.response?.status === 401 && !isAuthEndpoint && !window.location.pathname.includes('/login')) {
        window.location.href = '/login?expired=true';
      }

      return Promise.reject({
        ...error,
        message,
      });
    }
  );

  return instance;
};

export const apiClient = createApiClient();
export const axios = apiClient;