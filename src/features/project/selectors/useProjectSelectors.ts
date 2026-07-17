import { useProjectStore } from '../../../stores/project.store';

export function useActiveProject() {
  return useProjectStore((s) => s.activeProject);
}

export function useProjects() {
  return useProjectStore((s) => s.projects);
}

export function useActiveProjectId() {
  return useProjectStore((s) => s.activeProject?.id ?? null);
}
