import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge class names with Tailwind conflict resolution (later classes win). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
