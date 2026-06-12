import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  PlayCircle,
  Settings,
  Search,
  Sun,
  Moon,
  Check,
  CornerDownLeft,
} from 'lucide-react';
import { useUIStore } from '../../stores/ui.store';
import { useProjectStore } from '../../stores/project.store';
import { useThemeStore } from '../../stores/theme.store';
import { usePermission } from '../../hooks/usePermission';
import { Kbd } from '../../shared/ui';
import { cn } from '../../lib/cn';

interface Command {
  id: string;
  group: string;
  label: string;
  hint?: string;
  keywords?: string;
  icon: ComponentType<{ className?: string }>;
  active?: boolean;
  run: () => void;
}

export function CommandPalette() {
  const isOpen = useUIStore((s) => s.isCommandPaletteOpen);
  const close = useUIStore((s) => s.closeCommandPalette);

  return (
    <AnimatePresence>
      {isOpen && <PaletteDialog onClose={close} />}
    </AnimatePresence>
  );
}

function PaletteDialog({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const { projects, activeProject, setActiveProject } = useProjectStore();
  const { theme, toggleTheme } = useThemeStore();
  const hasConfigManage = usePermission('config.manage');
  const hasMemberManage = usePermission('member.manage');

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands = useMemo<Command[]>(() => {
    const go = (path: string) => () => {
      onClose();
      navigate(path);
    };

    const nav: Command[] = [
      { id: 'nav-dashboard', group: 'Navigation', label: 'Go to Dashboard', hint: 'G D', icon: LayoutDashboard, keywords: 'home overview stats', run: go('/') },
      { id: 'nav-projects', group: 'Navigation', label: 'Go to Projects', hint: 'G P', icon: FolderKanban, keywords: 'workspace list', run: go('/projects') },
    ];
    if (activeProject) {
      nav.push(
        { id: 'nav-cases', group: 'Navigation', label: 'Go to Test Repository', hint: 'G T', icon: ClipboardList, keywords: 'test cases suites sections', run: go('/test-cases') },
        { id: 'nav-runs', group: 'Navigation', label: 'Go to Test Runs', hint: 'G R', icon: PlayCircle, keywords: 'execution results', run: go('/test-runs') },
      );
      if (hasConfigManage || hasMemberManage) {
        nav.push({ id: 'nav-admin', group: 'Navigation', label: 'Go to Admin', hint: 'G A', icon: Settings, keywords: 'configuration members roles', run: go('/admin') });
      }
    }

    const projectCommands: Command[] = projects.map((p) => ({
      id: `project-${p.id}`,
      group: 'Switch Project',
      label: p.name,
      keywords: 'project switch select activate',
      icon: FolderKanban,
      active: p.id === activeProject?.id,
      run: () => {
        setActiveProject(p);
        onClose();
      },
    }));

    const prefs: Command[] = [
      {
        id: 'pref-theme',
        group: 'Preferences',
        label: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        keywords: 'theme appearance color toggle',
        icon: theme === 'dark' ? Sun : Moon,
        run: () => {
          toggleTheme();
          onClose();
        },
      },
    ];

    return [...nav, ...projectCommands, ...prefs];
  }, [activeProject, projects, theme, hasConfigManage, hasMemberManage, navigate, onClose, setActiveProject, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.keywords?.toLowerCase().includes(q),
    );
  }, [commands, query]);

  // Clamp selection when the result set changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keep the active option visible while arrowing through results
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        filtered[activeIndex]?.run();
        break;
    }
  };

  let lastGroup = '';

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 bg-black/60 z-[150]"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        initial={{ opacity: 0, scale: 0.97, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -8 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="dropdown-surface rounded-2xl w-[calc(100vw-2rem)] max-w-xl mx-auto mt-[14vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-3 px-4 border-b border-edge">
          <Search className="w-4 h-4 text-fg-subtle shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, pages, projects…"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-activedescendant={filtered[activeIndex]?.id}
            className="w-full h-13 py-4 bg-transparent text-sm text-fg placeholder:text-fg-subtle outline-none"
          />
          <Kbd>Esc</Kbd>
        </div>

        <div
          ref={listRef}
          id="command-palette-list"
          role="listbox"
          aria-label="Commands"
          className="max-h-[46vh] overflow-y-auto p-2"
        >
          {filtered.length === 0 && (
            <p className="text-sm text-fg-muted text-center py-10">
              No results for “{query}”
            </p>
          )}

          {filtered.map((cmd, index) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            const isActive = index === activeIndex;
            return (
              <div key={cmd.id}>
                {showGroup && (
                  <p className="px-3 pt-3 pb-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-fg-subtle">
                    {cmd.group}
                  </p>
                )}
                <div
                  id={cmd.id}
                  data-index={index}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => cmd.run()}
                  onMouseMove={() => setActiveIndex(index)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-100',
                    isActive ? 'bg-accent/10 text-fg dark:bg-indigo-400/15' : 'text-fg-secondary',
                  )}
                >
                  <cmd.icon className={cn('w-4 h-4 shrink-0', isActive ? 'text-accent dark:text-indigo-300' : 'text-fg-subtle')} />
                  <span className="flex-1 text-sm font-medium truncate">{cmd.label}</span>
                  {cmd.active && <Check className="w-4 h-4 text-success shrink-0" aria-label="Currently active" />}
                  {cmd.hint && <Kbd className="opacity-70">{cmd.hint}</Kbd>}
                  {isActive && !cmd.hint && <CornerDownLeft className="w-3.5 h-3.5 text-fg-subtle shrink-0" aria-hidden="true" />}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
