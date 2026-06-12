import { useEffect, useRef, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

interface DropdownPortalProps {
  isOpen: boolean;
  triggerRef: React.RefObject<HTMLElement | null> | { current: HTMLElement | null };
  children: ReactNode;
  onClose: () => void;
  width?: number;
}

const ESTIMATED_MENU_HEIGHT = 150; // Used for initial positioning

export function DropdownPortal({
  isOpen,
  triggerRef,
  children,
  onClose,
  width = 160,
}: DropdownPortalProps) {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [isAbove, setIsAbove] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasCalculatedOnce = useRef(false);

  // Calculate and update position
  useEffect(() => {
    if (!isOpen || !triggerRef.current) {
      setPosition(null);
      hasCalculatedOnce.current = false;
      return;
    }

    const calculatePosition = () => {
      if (!triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuHeight = containerRef.current?.offsetHeight || ESTIMATED_MENU_HEIGHT;
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      // Decide if menu should appear above or below
      const shouldBeAbove = spaceBelow < menuHeight + 20 && spaceAbove > menuHeight + 20;
      setIsAbove(shouldBeAbove);

      // Calculate vertical position
      const top = shouldBeAbove
        ? triggerRect.top - menuHeight - 8 // 8px gap above
        : triggerRect.bottom + 8; // 8px gap below

      // Calculate horizontal position with clamping
      let left = triggerRect.right - width;
      const minLeft = 16; // margin from left edge
      const maxLeft = window.innerWidth - width - 16; // margin from right edge

      left = Math.max(minLeft, Math.min(left, maxLeft));

      setPosition({ top: window.scrollY + top, left });
      hasCalculatedOnce.current = true;
    };

    // Calculate immediately and then after any DOM changes
    calculatePosition();

    // Also recalculate after a short delay to account for DOM measurements
    const timeoutId = setTimeout(calculatePosition, 50);

    return () => clearTimeout(timeoutId);
  }, [isOpen, triggerRef, width]);

  // Close on scroll, resize, or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleScroll = () => {
      onClose();
    };

    const handleResize = () => {
      onClose();
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.96, y: isAbove ? 6 : -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: isAbove ? 6 : -6 }}
      transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'fixed',
        top: position ? `${position.top}px` : '-9999px', // Off-screen until positioned
        left: position ? `${position.left}px` : '-9999px',
        width: `${width}px`,
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
      className="rounded-xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="rounded-xl overflow-hidden dropdown-surface">
        {children}
      </div>
    </motion.div>,
    document.body
  );
}
