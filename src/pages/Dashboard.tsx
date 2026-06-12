import { motion } from 'motion/react';
import { ClipboardList, PlayCircle, CheckCircle2, AlertCircle, Activity, Inbox } from 'lucide-react';
import { useProjectStore } from '../stores/project.store';
import { useProjectsList } from '../features/project/hooks/useProjectsList';
import { useDashboardData } from '../features/dashboard/hooks/useDashboardData';
import { useDashboardStats } from '../features/dashboard/hooks/useDashboardStats';
import { StatCard } from '../shared/components/StatCard';
import { ActivityItem } from '../features/dashboard/components/ActivityItem';
import { RecentProjectsList } from '../features/dashboard/components/RecentProjectsList';
import { FullPageSpinner } from '../shared/components/loading/FullPageSpinner';
import { DashboardOverviewSkeleton } from '../shared/components/loading/PageSkeletons';
import { ErrorState } from '../shared/components/ErrorState';
import { Badge, EmptyState, Skeleton } from '../shared/ui';

export default function Dashboard() {
  const { activeProject } = useProjectStore();
  const projectsQuery = useProjectsList();
  const dashboard = useDashboardData(activeProject?.id ?? null);

  const projects = projectsQuery.projects;
  const { stats, recentProjects } = useDashboardStats({
    runs: (dashboard.runs ?? []) as any[],
    cases: (dashboard.cases ?? []) as any[],
    projects,
    activeProject,
  });

  const activities = (dashboard.activities || []) as Array<{
    type?: string;
    user?: string;
    description?: string;
    timestamp?: string;
  }>;

  if (projectsQuery.isLoading) {
    return <FullPageSpinner label="Loading workspace..." />;
  }

  if (projectsQuery.isError) {
    return (
      <ErrorState
        message={projectsQuery.error?.message || 'Could not load projects.'}
        onRetry={() => void projectsQuery.refetch()}
      />
    );
  }

  const statsLoading = !!activeProject?.id && dashboard.isLoading;
  const statsError = !!activeProject?.id && dashboard.isError;
  const passRate =
    stats.cases > 0 ? `${Math.round((stats.passed / (stats.passed + stats.failed || 1)) * 100)}%` : '0%';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <div className="lg:col-span-2 space-y-6 lg:space-y-8">
        <div className="liquid-glass p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-heading font-semibold tracking-tight text-fg">Dashboard</h1>
              <p className="text-sm text-fg-muted mt-1">
                {activeProject
                  ? 'A live overview of your testing workspace.'
                  : 'Select a project to see detailed stats.'}
              </p>
            </div>
            {activeProject ? (
              <Badge variant="success" dot>{activeProject.name}</Badge>
            ) : (
              <Badge variant="neutral" dot>No project selected</Badge>
            )}
          </div>

          {statsError ? (
            <ErrorState
              title="Could not load dashboard data"
              message={dashboard.errorMessage || 'Try again in a moment.'}
              onRetry={() => dashboard.refetch()}
            />
          ) : statsLoading ? (
            <DashboardOverviewSkeleton />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatCard icon={ClipboardList} label="Total Test Cases" value={stats.cases.toLocaleString()} tone="accent" delay={0} />
                <StatCard icon={PlayCircle} label="Active Test Runs" value={stats.runs} tone="info" delay={0.06} />
                <StatCard icon={CheckCircle2} label="Avg. Pass Rate" value={passRate} tone="success" delay={0.12} />
                <StatCard icon={AlertCircle} label="Pending Defects" value={stats.failed} tone="danger" delay={0.18} />
              </div>

              <RecentProjectsList projects={recentProjects} isFetching={dashboard.isFetching && !dashboard.isLoading} />
            </>
          )}
        </div>
      </div>

      <div className="space-y-6 lg:space-y-8">
        <div className="liquid-glass p-6 md:p-8 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/15 dark:bg-indigo-400/15 dark:border-indigo-400/20 flex items-center justify-center">
              <Activity className="w-4 h-4 text-accent dark:text-indigo-300" />
            </div>
            <h2 className="text-lg font-heading font-semibold tracking-tight text-fg">Recent Activity</h2>
          </div>

          {statsLoading ? (
            <div className="space-y-6" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton circle className="w-2.5 h-2.5 mt-1.5 shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : activities.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="space-y-1"
            >
              {activities.map((activity, index) => (
                <ActivityItem
                  key={index}
                  type={activity.type || 'created'}
                  user={activity.user || 'User'}
                  description={activity.description || ''}
                  timestamp={activity.timestamp || 'Recently'}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <EmptyState
              icon={Inbox}
              title="No activity yet"
              description="Create test cases and start runs — team activity will show up here."
              className="py-10"
            />
          )}
        </div>
      </div>
    </div>
  );
}
