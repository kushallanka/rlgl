import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

interface ActivityItemProps {
  type: string;
  user: string;
  description: string;
  timestamp: string;
  index: number;
}

const TYPE_DOT: Record<string, string> = {
  passed: 'bg-emerald-500',
  failed: 'bg-rose-500',
  blocked: 'bg-amber-500',
  created: 'bg-indigo-500',
  updated: 'bg-violet-500',
  running: 'bg-sky-500',
};

export function ActivityItem({ type, user, description, timestamp, index }: ActivityItemProps) {
  const dotColor = TYPE_DOT[type] || TYPE_DOT.created;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.25 }}
      className="flex gap-4 group"
    >
      <div className="flex flex-col items-center" aria-hidden="true">
        <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${dotColor}`} />
        <div className="w-px flex-1 bg-edge mt-2 group-hover:bg-edge-strong transition-colors" />
      </div>
      <div className="flex-1 pb-6 min-w-0">
        <p className="text-sm text-fg-secondary leading-relaxed">
          <span className="font-semibold text-fg">{user || 'User'}</span>{' '}
          <span className="text-fg-muted">{description}</span>
        </p>
        <div className="flex items-center gap-1.5 mt-1">
          <Clock className="w-3 h-3 text-fg-subtle" aria-hidden="true" />
          <p className="text-[10px] text-fg-subtle uppercase tracking-wider">{timestamp || 'Recently'}</p>
        </div>
      </div>
    </motion.div>
  );
}
