import { ReactNode, CSSProperties } from 'react';

interface ListRowProps {
  /** Dropdown open or otherwise "focused" — slightly stronger tint, no hover needed */
  isActive?: boolean;
  /** Checkbox-selected row — violet tint */
  isSelected?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

/**
 * Shared row shell for every virtualised table in the app.
 *
 * Deliberately has NO border and NO bottom separator — visual separation
 * comes from the caller setting a virtualiser estimateSize larger than the
 * row's rendered height.  The dead space at the bottom of each virtual slot
 * is structurally outside any hovered element, so hover-bg and row dividers
 * can never share a pixel.
 */
export function ListRow({ isActive, isSelected, children, style }: ListRowProps) {
  return (
    <div
      className={[
        'flex items-center gap-3 px-3 py-2.5 transition-colors cursor-default',
        isActive
          ? 'bg-black/[0.03] dark:bg-white/[0.05]'
          : isSelected
          ? 'bg-violet-500/[0.06] dark:bg-violet-500/[0.06]'
          : 'hover:bg-black/[0.025] dark:hover:bg-white/[0.04]',
      ].join(' ')}
      style={style}
    >
      {children}
    </div>
  );
}
