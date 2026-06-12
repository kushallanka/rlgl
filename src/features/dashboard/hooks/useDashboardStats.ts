import { useMemo } from 'react';
import type { Project } from '../../../features/project/types/project.types';

interface DashboardStatsInput {
  runs: any[];
  cases: any[];
  projects: Project[];
  activeProject: Project | null;
}

export function useDashboardStats({ runs, cases, projects, activeProject }: DashboardStatsInput) {
  return useMemo(() => {
    const runList = Array.isArray(runs) ? runs : [];
    const caseList = Array.isArray(cases) ? cases : [];

    let passed = 0;
    let failed = 0;
    runList.forEach((run: any) => {
      run.results?.forEach((res: any) => {
        if (res.status === 'Passed') passed++;
        if (res.status === 'Failed') failed++;
      });
    });

    const recentProjects = activeProject
      ? projects
          .filter((p) => p.id === activeProject.id)
          .map((p) => {
            const projectRuns = runList.filter((r: any) => r.projectId === p.id);
            const totalResults = projectRuns.reduce((sum: number, r: any) => sum + (r.results?.length ?? 0), 0);
            const passedResults = projectRuns.reduce((sum: number, r: any) => sum + (r.results?.filter((res: any) => res.status === 'Passed').length ?? 0), 0);
            return {
              id: p.id,
              name: p.name,
              caseCount: caseList.length,
              runCount: projectRuns.length,
              passRate: totalResults > 0 ? Math.round((passedResults / totalResults) * 100) : 0,
            };
          })
          .slice(0, 3)
      : projects.slice(0, 3).map((p) => ({
          id: p.id,
          name: p.name,
          caseCount: caseList.length,
          runCount: runList.filter((r: any) => r.projectId === p.id).length,
          passRate: 0,
        }));

    return {
      stats: {
        cases: caseList.length,
        runs: runList.length,
        passed,
        failed,
      },
      recentProjects,
    };
  }, [runs, cases, activeProject, projects]);
}
