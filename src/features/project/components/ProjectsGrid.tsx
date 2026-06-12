import { motion, AnimatePresence } from 'motion/react';
import { FolderKanban, Check, Plus, Sparkles } from 'lucide-react';
import { Project } from '../types/project.types';
import { ProjectDropdown } from './ProjectDropdown';
import { Button, EmptyState } from '../../../shared/ui';

interface ProjectsGridProps {
  projects: Project[];
  activeProject: Project | null;
  hasProjects: boolean;
  canCreateProject: boolean;
  openDropdownId: string | null;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onToggleActive: (project: Project) => void;
  onToggleDropdown: (projectId: string) => void;
  onDetailsClick: (project: Project) => void;
  onEditClick: (project: Project) => void;
  onDeleteClick: (project: Project) => void;
  canDeleteProject: (project: Project) => boolean;
  onCreateProject: () => void;
}

export function ProjectsGrid({
  projects,
  activeProject,
  hasProjects,
  canCreateProject,
  openDropdownId,
  dropdownRef,
  onToggleActive,
  onToggleDropdown,
  onDetailsClick,
  onEditClick,
  onDeleteClick,
  canDeleteProject,
  onCreateProject,
}: ProjectsGridProps) {
  // Card gradients for visual variety
  const cardGradients = [
    { bg: 'accent-blue', glow: 'glow-blue' },
    { bg: 'accent-purple', glow: 'glow-purple' },
    { bg: 'accent-green', glow: 'glow-green' },
    { bg: 'accent-orange', glow: 'glow-orange' },
    { bg: 'accent-teal', glow: 'glow-teal' },
    { bg: 'accent-pink', glow: '' },
  ];

  if (!hasProjects) {
    return (
      <div className="col-span-full liquid-glass">
        <EmptyState
          icon={Sparkles}
          title="No projects yet"
          description="Projects keep your test suites, runs, and team in one place. Create your first one to get started."
          action={
            canCreateProject && (
              <Button onClick={onCreateProject} leftIcon={<Plus className="w-4 h-4" />}>
                Create Project
              </Button>
            )
          }
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={dropdownRef}>
      <AnimatePresence mode="popLayout">
        {projects.map((project, idx) => {
          const gradient = cardGradients[idx % cardGradients.length] ?? cardGradients[0]!;
          const isActive = activeProject?.id === project.id;
          const canDelete = canDeleteProject(project);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: Math.min(idx, 6) * 0.04, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group relative liquid-glass p-6 accent-shadow overflow-hidden transition-ui duration-300 ${
                isActive ? 'ring-2 ring-violet-400/40 dark:ring-white/20' : ''
              }`}
            >
              {/* Active indicator bar at top */}
              {isActive && (
                <motion.div
                  layoutId={`active-bar-${project.id}`}
                  className={`absolute top-0 left-0 right-0 h-1 ${gradient.bg} shadow-sm`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Animated corner accent for active project */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4"
                >
                  <span className="flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${gradient.bg}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${gradient.bg}`}></span>
                  </span>
                </motion.div>
              )}

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-12 h-12 ${gradient.bg} rounded-2xl flex items-center justify-center shadow-lg ${gradient.glow}`}
                  >
                    <FolderKanban className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Three-dot menu */}
                  <ProjectDropdown
                    isOpen={openDropdownId === project.id}
                    onToggle={() => onToggleDropdown(project.id)}
                    onDetailsClick={() => onDetailsClick(project)}
                    onEditClick={() => onEditClick(project)}
                    onDeleteClick={() => onDeleteClick(project)}
                    canDelete={canDelete}
                  />
                </div>

                {/* Project Info */}
                <div className="relative">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-gray-700 dark:group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  {/* Subtle shimmer line under title on hover */}
                  {/* scale-x instead of width so the reveal stays on the compositor */}
                  <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-gray-400/30 dark:via-white/30 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
                <p className="text-gray-500 dark:text-white/40 text-sm font-body line-clamp-2 mb-6">
                  {project.description || 'No description provided.'}
                </p>

                {/* Active/Select Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onToggleActive(project)}
                  layout
                  className={`w-full py-3 rounded-xl font-body font-medium text-sm transition-ui duration-500 flex items-center justify-center overflow-hidden relative ${
                    isActive
                      ? `${gradient.bg} text-white shadow-lg ${gradient.glow}`
                      : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {/* Shimmer effect for active state (CSS keyframes: compositor-only) */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-sweep" />
                  )}

                  <motion.span
                    initial={false}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 relative z-10"
                  >
                    {isActive ? (
                      <>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        >
                          <Check className="w-4 h-4" />
                        </motion.div>
                        <span>Active</span>
                      </>
                    ) : (
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Select
                      </motion.span>
                    )}
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
