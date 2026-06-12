import { cn } from '../../lib/cn';

interface SkeletonProps {
  className?: string;
  /** Render as a circle (avatars, icon placeholders). */
  circle?: boolean;
}

/** Shimmering placeholder block. Size it with width/height classes. */
export function Skeleton({ className, circle = false }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'shimmer bg-black/[0.05] dark:bg-white/[0.06]',
        circle ? 'rounded-full' : 'rounded-lg',
        className,
      )}
    />
  );
}
