import { motion, AnimatePresence } from 'motion/react';
import { X, FolderKanban, Calendar, Check } from 'lucide-react';
import { Project } from '../types/project.types';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject: Project | null;
  activeProject: Project | null;
}

export function ProjectDetailsModal({
  isOpen,
  onClose,
  selectedProject,
  activeProject,
}: ProjectDetailsModalProps) {
  if (!isOpen || !selectedProject) return null;

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Invalid date';
    }
  };

  const isActive = activeProject?.id === selectedProject.id;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-modal rounded-3xl p-8 max-w-md w-full glass-shadow border border-gray-200 dark:border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-14 h-14 accent-blue rounded-2xl flex items-center justify-center glow-blue shadow-lg"
            >
              <FolderKanban className="w-7 h-7 text-white" />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">Project Details</h2>
              <p className="text-sm text-gray-500 dark:text-white/50 font-body">View project information</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-gray-400 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-ui"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="space-y-6">
            {/* Project Name */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                {selectedProject.name}
                {isActive && (
                  <span className="flex items-center gap-1 px-2 py-1 accent-green rounded-lg text-xs font-medium text-white glow-green">
                    <Check className="w-3 h-3" />
                    Active
                  </span>
                )}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider">Description</label>
              <p className="text-gray-700 dark:text-white/80 font-body">
                {selectedProject.description || 'No description provided.'}
              </p>
            </div>

            {/* Project ID */}
            <div className="space-y-2">
              <label className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider">Project ID</label>
              <p className="text-gray-700 dark:text-white/80 font-mono text-sm">{selectedProject.id}</p>
            </div>

            {/* Created Date */}
            <div className="space-y-2">
              <label className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                Created
              </label>
              <p className="text-gray-700 dark:text-white/80 font-body">{formatDate(selectedProject.createdAt)}</p>
            </div>

            {/* Last Updated */}
            <div className="space-y-2">
              <label className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                Last Updated
              </label>
              <p className="text-gray-700 dark:text-white/80 font-body">{formatDate(selectedProject.updatedAt)}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-white/10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-body font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
