import { useState, type ComponentType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { LayoutDashboard, FolderKanban, ClipboardList, PlayCircle, LogOut, Settings, Search } from 'lucide-react';
import { useAuthStore } from '../../stores/auth.store';
import { useProjectStore } from '../../stores/project.store';
import { useUIStore } from '../../stores/ui.store';
import { usePermission } from '../../hooks/usePermission';
import { useLogout } from '../../features/auth/hooks/useUser';
import { LogoutConfirmModal } from '../../features/auth/components/LogoutConfirmModal';
import { IconButton, Kbd, Tooltip } from '../../shared/ui';
import { cn } from '../../lib/cn';

const springGentle = { type: 'spring' as const, stiffness: 400, damping: 30, mass: 1 };

interface NavItemProps {
  to: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  disabled?: boolean;
}

function NavItem({ to, icon: Icon, label, active, disabled }: NavItemProps) {
  return (
    <Link
      to={to}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      title={disabled ? `${label} — select a project first` : undefined}
      className={cn(
        'relative px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 rounded-full nav-pill-active"
          transition={springGentle}
        />
      )}
      <span
        className={cn(
          'relative z-10 flex items-center gap-2',
          active
            ? 'text-white'
            : disabled
              ? 'text-fg-subtle'
              : 'text-fg-muted hover:text-fg',
        )}
      >
        <Icon className="w-4 h-4" />
        <span className="hidden lg:inline">{label}</span>
      </span>
    </Link>
  );
}

function BrandMark() {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Red Light Green Light — home">
      <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white/10 border border-transparent dark:border-white/10 flex items-center justify-center gap-1 shadow-card">
        <span className="w-2 h-2 rounded-full bg-rose-500 group-hover:animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-pulse" />
      </div>
      <span className="hidden sm:block text-[15px] font-semibold tracking-tight text-fg">
        Red Light
        <span className="text-fg-subtle mx-1.5">·</span>
        Green Light
      </span>
    </Link>
  );
}

export function Navbar() {
  const location = useLocation();
  const { user } = useAuthStore();
  const { activeProject } = useProjectStore();
  const openCommandPalette = useUIStore((s) => s.openCommandPalette);
  const hasConfigManage = usePermission('config.manage');
  const hasMemberManage = usePermission('member.manage');
  const logoutMutation = useLogout();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  if (!user) return null;

  const handleConfirmLogout = async () => {
    await logoutMutation.mutateAsync();
    setShowLogoutModal(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springGentle}
        className="fixed top-0 left-0 right-0 z-50 glass-nav px-4 sm:px-6 h-[68px] flex items-center justify-between gap-3"
        aria-label="Main navigation"
      >
        <BrandMark />

        <div className="glass-card px-1.5 py-1.5 flex items-center gap-0.5 rounded-full">
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/'} />
          <NavItem to="/projects" icon={FolderKanban} label="Projects" active={location.pathname === '/projects'} />
          <NavItem to="/test-cases" icon={ClipboardList} label="Test Repository" active={location.pathname === '/test-cases'} disabled={!activeProject} />
          <NavItem to="/test-runs" icon={PlayCircle} label="Test Runs" active={location.pathname === '/test-runs'} disabled={!activeProject} />
          {(hasConfigManage || hasMemberManage) && (
            <NavItem to="/admin" icon={Settings} label="Admin" active={location.pathname === '/admin'} disabled={!activeProject} />
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={openCommandPalette}
            className="hidden md:flex items-center gap-2.5 h-9 pl-3 pr-2 rounded-xl glass-input cursor-pointer text-fg-subtle hover:text-fg-muted"
            aria-label="Open command palette"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-xs font-medium pr-3">Search…</span>
            <Kbd>⌘K</Kbd>
          </button>
          <Tooltip content="Command palette (⌘K)" position="bottom" className="md:hidden">
            <IconButton label="Open command palette" size="sm" onClick={openCommandPalette}>
              <Search />
            </IconButton>
          </Tooltip>

          <div className="flex items-center gap-3 pl-1 sm:pl-2 sm:border-l border-edge">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-semibold text-fg leading-tight">{user.name}</span>
              <span className="text-[11px] text-fg-subtle leading-tight">{user.role}</span>
            </div>
            <div
              aria-hidden="true"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-indigo-500 to-violet-500 shadow-accent"
            >
              {user.name?.[0]}
            </div>
            <IconButton label="Log out" variant="danger" size="sm" onClick={() => setShowLogoutModal(true)}>
              <LogOut />
            </IconButton>
          </div>
        </div>
      </motion.nav>

      <LogoutConfirmModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
        isLoading={logoutMutation.isPending}
      />
    </>
  );
}
