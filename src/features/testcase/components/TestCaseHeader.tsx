import { ClipboardList, Plus, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface TestCaseHeaderProps {
  projectName: string;
  canCreateTestCase: boolean;
  onAddSuite: () => void;
}

export function TestCaseHeader({ projectName, canCreateTestCase, onAddSuite }: TestCaseHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Title block */}
      <div className="flex items-center gap-4 min-w-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-12 h-12 sm:w-14 sm:h-14 accent-purple rounded-2xl flex items-center justify-center glow-purple shadow-lg flex-shrink-0"
          aria-hidden="true"
        >
          <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.div>
        <div className="flex flex-col gap-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-gray-900 dark:text-white">
            Test Repository
          </h1>
          <p className="text-gray-500 dark:text-white/50 font-body text-sm truncate">
            Suites, sections, and test cases for <span className="text-gray-700 dark:text-white/70">{projectName}</span>
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group flex-1 sm:flex-none min-w-0"
        >
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-white/40 group-focus-within:text-violet-400 transition-colors"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search cases…"
            className="pl-10 pr-4 py-2.5 liquid-glass rounded-xl outline-none focus:ring-2 focus:ring-violet-500/50 transition-ui text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 w-full sm:w-52 lg:w-64"
            aria-label="Search test cases"
          />
        </motion.div>

        {canCreateTestCase && (
          <motion.button
            onClick={onAddSuite}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 accent-blue text-white font-body font-medium rounded-xl glow-blue shadow-lg transition-ui text-sm min-h-[40px] flex-shrink-0"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add Suite</span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
