import { motion } from 'motion/react';

const skeletonGradient = 'linear-gradient(90deg, rgba(128,128,128,0) 0%, rgba(128,128,128,0.15) 50%, rgba(128,128,128,0) 100%)';

export function ProjectsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="glass-card p-6 space-y-4"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background: skeletonGradient,
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
              }}
            />
          </div>
          <div className="flex justify-between relative">
            <div className="h-12 w-12 rounded-2xl bg-gray-200 dark:bg-white/10" />
            <div className="h-9 w-9 rounded-xl bg-gray-100 dark:bg-white/5" />
          </div>
          <div className="h-6 w-[75%] rounded-lg bg-gray-200 dark:bg-white/10" />
          <div className="h-4 w-full rounded bg-gray-100 dark:bg-white/5" />
          <div className="h-4 w-5/6 rounded bg-gray-100 dark:bg-white/5" />
          <div className="flex gap-3 pt-2">
            <div className="h-10 flex-1 rounded-xl bg-gray-200 dark:bg-white/10" />
            <div className="h-10 w-12 rounded-xl bg-gray-100 dark:bg-white/5" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function DashboardOverviewSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" aria-hidden>
      <div className="lg:col-span-2 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 space-y-6"
        >
          <div className="flex justify-between">
            <div className="space-y-2">
              <div className="h-8 w-40 rounded-lg bg-gray-200 dark:bg-white/10" />
              <div className="h-4 w-64 rounded bg-gray-100 dark:bg-white/5" />
            </div>
            <div className="h-8 w-32 rounded-full bg-gray-200 dark:bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="h-28 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/2 border border-gray-200 dark:border-white/5"
              />
            ))}
          </div>
          <div className="space-y-3 pt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="h-20 rounded-2xl bg-gray-100 dark:bg-white/5"
              />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 space-y-6"
      >
        <div className="h-6 w-40 rounded bg-gray-200 dark:bg-white/10" />
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-white/20 mt-2" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-full rounded bg-gray-100 dark:bg-white/5" />
              <div className="h-3 w-24 rounded bg-gray-100 dark:bg-white/5" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
