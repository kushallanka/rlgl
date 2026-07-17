import { motion } from 'motion/react';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function SkeletonLoader({ className = '', variant = 'text', width, height, lines = 1 }: SkeletonLoaderProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-none';
      case 'rounded':
        return 'rounded-lg';
      default:
        return 'rounded';
    }
  };

  const skeletonElement = (
    <motion.div
      className={`bg-gradient-to-r from-gray-200/20 to-gray-300/20 dark:from-white/10 dark:to-white/20 ${getVariantClasses()} ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <SkeletonLoader
            // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder count, list never reorders
            key={index}
            variant="text"
            height="1rem"
            width={index === lines - 1 ? '70%' : '100%'}
            className="inline-block"
          />
        ))}
      </div>
    );
  }

  return skeletonElement;
}

// Predefined skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="liquid-glass p-6 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4">
      <div className="flex items-center gap-4">
        <SkeletonLoader variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <SkeletonLoader height="1.5rem" width="60%" />
          <SkeletonLoader height="1rem" width="40%" />
        </div>
      </div>
      <SkeletonLoader height="2rem" width="100%" />
      <SkeletonLoader height="2rem" width="80%" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder count, list never reorders
            <SkeletonLoader key={index} height="1rem" />
          ))}
        </div>
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder count, list never reorders
        <div key={rowIndex} className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, colIndex) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder count, list never reorders
              <SkeletonLoader key={colIndex} height="1rem" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ListSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: items }).map((_, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder count, list never reorders
          key={index}
          className="flex items-center gap-3 p-3 liquid-glass rounded-xl border border-gray-200 dark:border-white/10"
        >
          <SkeletonLoader variant="circular" width={32} height={32} />
          <div className="flex-1 space-y-1">
            <SkeletonLoader height="1rem" width="40%" />
            <SkeletonLoader height="0.75rem" width="60%" />
          </div>
          <SkeletonLoader height="2rem" width="60px" />
        </div>
      ))}
    </div>
  );
}
