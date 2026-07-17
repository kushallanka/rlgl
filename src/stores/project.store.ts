import { create } from 'zustand';
import { PROJECTS_QUERY_KEY } from '../features/project/queryKeys';
import type { Project } from '../features/project/types/project.types';
import { queryClient } from '../lib/queryClient';

let _fetchProjectPermissions: ((projectId: string) => void) | null = null;
let _clearProjectPermissions: (() => void) | null = null;

export function injectPermissionActions(fetch: (id: string) => void, clear: () => void) {
  _fetchProjectPermissions = fetch;
  _clearProjectPermissions = clear;
}

interface ProjectState {
  projects: Project[];
  activeProject: Project | null;
  fetchProjects: () => Promise<void>;
  setActiveProject: (project: Project | null) => void;
  clearActiveProject: () => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  activeProject: JSON.parse(localStorage.getItem('activeProject') || 'null'),
  fetchProjects: async () => {
    await queryClient.refetchQueries({ queryKey: [...PROJECTS_QUERY_KEY] });
  },
  setActiveProject: (project) => {
    if (project) {
      localStorage.setItem('activeProject', JSON.stringify(project));
      _fetchProjectPermissions?.(project.id);
    } else {
      localStorage.removeItem('activeProject');
      _clearProjectPermissions?.();
    }
    set({ activeProject: project });
  },
  clearActiveProject: () => {
    localStorage.removeItem('activeProject');
    set({ activeProject: null });
  },
}));
