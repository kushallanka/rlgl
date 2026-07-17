import { Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminHeaderProps {
  projectName: string;
}

export function AdminHeader({ projectName }: AdminHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-14 h-14 accent-orange rounded-2xl flex items-center justify-center glow-orange shadow-lg"
      >
        <Settings className="w-7 h-7 text-white" />
      </motion.div>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-heading font-bold tracking-tight text-gray-900 dark:text-white">
          Admin Configuration
        </h1>
        <p className="text-gray-500 dark:text-white/50 font-body text-sm">
          Configure settings for <span className="text-gray-700 dark:text-white/70">{projectName}</span>
        </p>
      </div>
    </div>
  );
}
