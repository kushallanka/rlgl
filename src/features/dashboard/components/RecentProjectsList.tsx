import { FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectStats {
  id: string;
  name: string;
  caseCount: number;
  runCount: number;
  passRate: number;
}

interface RecentProjectsListProps {
  projects: ProjectStats[];
  isFetching: boolean;
}

function passRateColor(rate: number) {
  if (rate >= 80) return 'bg-emerald-500';
  if (rate >= 50) return 'bg-amber-500';
  return 'bg-rose-500';
}

export function RecentProjectsList({ projects, isFetching }: RecentProjectsListProps) {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-heading font-semibold tracking-tight text-fg">Recent Projects</h2>
        {isFetching && <span className="text-[10px] uppercase tracking-wider text-fg-subtle">Refreshing…</span>}
      </div>
      <div className="space-y-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between p-4 liquid-glass rounded-2xl group hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 dark:bg-indigo-400/15 dark:border-indigo-400/20 flex items-center justify-center shrink-0">
                  <FolderKanban className="w-5 h-5 text-accent dark:text-indigo-300" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-medium text-fg truncate">{project.name}</h4>
                  <p className="text-[10px] text-fg-subtle mt-0.5 uppercase tracking-wider">
                    {project.caseCount} Tests · {project.runCount} Runs
                  </p>
                </div>
              </div>
              <div className="text-right min-w-[80px] sm:min-w-[120px] shrink-0 ml-4">
                <div className="text-[10px] text-fg-muted uppercase tracking-widest mb-2">
                  {project.passRate}% Pass Rate
                </div>
                <div
                  className="h-1.5 bg-black/[0.06] dark:bg-white/[0.06] rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={project.passRate}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${project.name} pass rate`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.passRate}%` }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`h-full rounded-full ${passRateColor(project.passRate)}`}
                  />
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-8 text-fg-subtle">
            <p className="text-sm">No projects with test data yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
