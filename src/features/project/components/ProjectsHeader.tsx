import { motion } from 'motion/react';
import { Plus, RefreshCw, FolderKanban } from 'lucide-react';

interface ProjectsHeaderProps {
  canCreateProject: boolean;
  isFetching: boolean;
  onRefresh: () => void;
  onCreateProject: () => void;
}

export function ProjectsHeader({
  canCreateProject,
  isFetching,
  onRefresh,
  onCreateProject,
}: ProjectsHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div className="flex items-center gap-4 min-w-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="accent-purple rounded-2xl w-12 h-12 flex items-center justify-center glow-purple flex-shrink-0"
          aria-hidden="true"
        >
          <FolderKanban className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex flex-col gap-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-gray-900 dark:text-white">Projects</h1>
          <p className="text-gray-500 dark:text-white/50 font-body text-sm truncate">Manage your testing environments and teams</p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        {isFetching && (
          <span className="text-xs font-body uppercase tracking-wider text-gray-500 dark:text-white/50">Refreshing…</span>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onRefresh}
          className="p-2.5 rounded-xl liquid-glass text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-ui min-w-[40px] min-h-[40px] flex items-center justify-center"
          title="Refresh projects"
          aria-label="Refresh projects"
        >
          <RefreshCw className={`w-5 h-5 ${isFetching ? 'animate-spin' : ''}`} />
        </motion.button>

        {canCreateProject && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCreateProject}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 accent-blue text-white rounded-xl font-body font-medium glow-blue shadow-lg transition-ui text-sm min-h-[40px]"
          >
            <Plus className="w-5 h-5 flex-shrink-0" />
            <span>New Project</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
