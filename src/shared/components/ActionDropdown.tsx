import type { LucideIcon } from 'lucide-react';
import { MoreVertical } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export interface ActionItem {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: 'default' | 'danger';
  separator?: boolean;
}

interface ActionDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  actions: ActionItem[];
  buttonClassName?: string;
}

export function ActionDropdown({ isOpen, onToggle, actions, buttonClassName }: ActionDropdownProps) {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className={
          buttonClassName ??
          `p-2 rounded-xl transition-ui ${
            isOpen
              ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
              : 'text-gray-400 dark:text-white/40 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
          }`
        }
        aria-label="More options"
        aria-expanded={isOpen}
      >
        <MoreVertical className="w-4 h-4" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -5 }}
            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-10 right-0 z-50 w-48 bg-white dark:bg-[#1e1e28] rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <button
                  type="button"
                  key={action.label}
                  onClick={action.onClick}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-sm transition-colors font-body
                    ${i > 0 ? 'border-t border-gray-200 dark:border-white/10' : ''}
                    ${
                      action.variant === 'danger'
                        ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10'
                        : 'text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {action.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
