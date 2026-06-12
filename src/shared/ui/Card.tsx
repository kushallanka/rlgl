import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

const variants = {
  /* Quiet container — section grouping, stat tiles */
  flat: 'glass-card',
  /* Default content card — lifts subtly on hover when interactive */
  raised: 'liquid-glass',
  /* Hero/feature surfaces — strongest elevation and blur */
  strong: 'liquid-glass-strong',
} as const;

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
  padding?: keyof typeof paddings;
  /** Adds pointer cursor + hover lift for clickable cards. */
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'raised', padding = 'md', interactive = false, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        variants[variant],
        paddings[padding],
        interactive && 'cursor-pointer hover:-translate-y-0.5 transition-transform duration-200',
        className,
      )}
      {...rest}
    />
  );
});
