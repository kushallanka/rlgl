import { useCallback, useRef, useState } from 'react';

/**
 * Hook to manage dropdown menu state and refs for Portal-based dropdowns
 * Simplifies managing open state and trigger button references
 */
export function useDropdownPortal() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const triggerRefs = useRef<Map<string, HTMLElement>>(new Map());

  const toggleMenu = useCallback((menuId: string) => {
    setOpenMenuId((prev) => (prev === menuId ? null : menuId));
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenuId(null);
  }, []);

  const registerTriggerRef = useCallback((menuId: string, element: HTMLElement | null) => {
    if (element) {
      triggerRefs.current.set(menuId, element);
    } else {
      triggerRefs.current.delete(menuId);
    }
  }, []);

  const getTriggerRef = useCallback((menuId: string) => {
    // Return a React RefObject-like interface that DropdownPortal expects
    return {
      current: triggerRefs.current.get(menuId) || null,
    };
  }, []);

  return {
    openMenuId,
    setOpenMenuId,
    toggleMenu,
    closeMenu,
    getTriggerRef,
    registerTriggerRef,
    triggerRefs,
  };
}
