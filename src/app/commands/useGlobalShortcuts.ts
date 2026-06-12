import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUIStore } from '../../stores/ui.store';
import { useAuthStore } from '../../stores/auth.store';
import { useProjectStore } from '../../stores/project.store';

const GO_TIMEOUT_MS = 800;

function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT' ||
    el.isContentEditable
  );
}

/**
 * App-wide keyboard shortcuts:
 *  - Ctrl/Cmd+K  → command palette
 *  - g then d/p/t/r/a → go to Dashboard / Projects / Test repo / Runs / Admin
 */
export function useGlobalShortcuts() {
  const navigate = useNavigate();
  const toggleCommandPalette = useUIStore((s) => s.toggleCommandPalette);
  const pendingGo = useRef<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleCommandPalette();
        return;
      }

      // Sequences below never fire while typing or with modifiers held
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!useAuthStore.getState().user) return;

      const goArmed = pendingGo.current !== null;
      if (goArmed) {
        window.clearTimeout(pendingGo.current!);
        pendingGo.current = null;
        const hasProject = !!useProjectStore.getState().activeProject;
        const routes: Record<string, { path: string; needsProject?: boolean }> = {
          d: { path: '/' },
          p: { path: '/projects' },
          t: { path: '/test-cases', needsProject: true },
          r: { path: '/test-runs', needsProject: true },
          a: { path: '/admin', needsProject: true },
        };
        const target = routes[e.key.toLowerCase()];
        if (target && (!target.needsProject || hasProject)) {
          e.preventDefault();
          navigate(target.path);
        }
        return;
      }

      if (e.key.toLowerCase() === 'g') {
        pendingGo.current = window.setTimeout(() => {
          pendingGo.current = null;
        }, GO_TIMEOUT_MS);
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      if (pendingGo.current !== null) window.clearTimeout(pendingGo.current);
    };
  }, [navigate, toggleCommandPalette]);
}
