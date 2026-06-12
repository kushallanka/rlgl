import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuthStore } from '../../stores/auth.store';
import ThemeSwitch from '../../shared/components/ThemeSwitch';
import { Navbar } from './Navbar';
import { CommandPalette } from '../commands/CommandPalette';
import { useGlobalShortcuts } from '../commands/useGlobalShortcuts';

/**
 * Authenticated application chrome: navbar, command palette, keyboard
 * shortcuts, page transition, theme switch.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const { user } = useAuthStore();
  const location = useLocation();
  useGlobalShortcuts();

  return (
    <div className="min-h-screen bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-accent focus:text-accent-fg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-[100px] pb-12 px-4 sm:px-8 max-w-[1600px] mx-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </main>

      {user && (
        <>
          <ThemeSwitch />
          <CommandPalette />
        </>
      )}
    </div>
  );
}
