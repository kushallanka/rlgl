import { create } from 'zustand';
import { apiClient as axios } from '../shared/api/api';
import { queryClient } from '../lib/queryClient';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  systemPermissions: string[];
}

interface AuthState {
  user: User | null;
  setAuth: (user: User | null) => void;
  logout: () => void;
  hasSystemPermission: (key: string) => boolean;
  onLogoutCallbacks: (() => void)[];
  onLogout: (cb: () => void) => () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  onLogoutCallbacks: [],
  onLogout: (cb) => {
    set({ onLogoutCallbacks: [...get().onLogoutCallbacks, cb] });
    return () => {
      set({ onLogoutCallbacks: get().onLogoutCallbacks.filter(c => c !== cb) });
    };
  },
  setAuth: (user) => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
    set({ user });
  },
  logout: async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('activeProjectId');
    localStorage.removeItem('activeProject');
    get().onLogoutCallbacks.forEach(cb => cb());
    set({ user: null, onLogoutCallbacks: [] });
    queryClient.clear();
    try { await axios.post('/auth/logout'); } catch { /* ignore */ }
  },
  hasSystemPermission: (key: string) => {
    return get().user?.systemPermissions?.includes(key) || false;
  }
}));
