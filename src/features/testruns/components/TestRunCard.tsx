import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PlayCircle, CheckCircle2, XCircle, AlertCircle, Clock, ClipboardList,
  ChevronRight, ChevronDown, Info, Pencil, Trash2,
} from 'lucide-react';
import { formatDate } from '../../../utils';
import type { TestRun } from '../types';
import { VirtualTestResultsList } from './VirtualTestResultsList';
import { ConfirmModal } from '../../../shared/components/ConfirmModal';
import { ActionDropdown, type ActionItem } from '../../../shared/components/ActionDropdown';
import { EditTestRunModal } from './EditTestRunModal';

const CARD_GRADIENTS = [
  { bg: 'accent-blue',   glow: 'glow-blue' },
  { bg: 'accent-purple', glow: 'glow-purple' },
  { bg: 'accent-green',  glow: 'glow-green' },
  { bg: 'accent-orange', glow: 'glow-orange' },
  { bg: 'accent-teal',   glow: 'glow-teal' },
  { bg: 'accent-pink',   glow: 'glow-pink' },
];

interface TestRunCardProps {
  run: TestRun;
  index: number;
  isExpanded: boolean;
  onToggleExpand: (runId: string) => void;
  onDelete?: (runId: string) => void;
  canDelete?: boolean;
  onUpdateStatus?: (resultId: string, status: string) => void;
  onEditSave?: (runId: string, data: { name: string; description: string; version?: number }) => void;
  isSaving?: boolean;
}

export function TestRunCard({
  run, index, isExpanded, onToggleExpand,
  onDelete, canDelete, onUpdateStatus, onEditSave, isSaving,
}: TestRunCardProps) {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length] ?? CARD_GRADIENTS[0]!;

  const total    = run.results?.length || 0;
  const passed   = run.results?.filter(r => r.status === 'Passed').length || 0;
  const failed   = run.results?.filter(r => r.status === 'Failed').length || 0;
  const blocked  = run.results?.filter(r => r.status === 'Blocked').length || 0;
  const untested = total - passed - failed - blocked;
  const progress = total > 0 ? ((passed + failed + blocked) / total) * 100 : 0;

  const [selectedIds, setSelectedIds]           = useState<Set<string>>(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditModal, setShowEditModal]         = useState(false);
  const [menuOpen, setMenuOpen]                   = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Clear selection when collapsed
  useEffect(() => {
    if (!isExpanded) setSelectedIds(new Set());
  }, [isExpanded]);

  const handleToggleSelect  = (id: string) =>
    setSelectedIds(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const handleSelectAll     = () => setSelectedIds(new Set(run.results?.map(r => r.id) ?? []));
  const handleClearSelection = () => setSelectedIds(new Set());
  const handleBulkUpdate    = (status: string) => {
    selectedIds.forEach(id => onUpdateStatus?.(id, status));
    setSelectedIds(new Set());
  };

  const menuActions: ActionItem[] = [
    {
      label: 'Details',
      icon: Info,
      onClick: () => { setMenuOpen(false); onToggleExpand(run.id); },
    },
    {
      label: 'Edit',
      icon: Pencil,
      onClick: () => { setMenuOpen(false); setShowEditModal(true); },
    },
    ...(canDelete && onDelete ? [{
      label: 'Delete',
      icon: Trash2,
      onClick: () => { setMenuOpen(false); setShowDeleteConfirm(true); },
      variant: 'danger' as const,
    }] : []),
  ];

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: Math.min(index, 6) * 0.04, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -2 }}
        className={`liquid-glass group relative rounded-2xl accent-shadow ${menuOpen ? 'z-20' : 'z-0'}`}
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        </div>

        {/* Main clickable area — excludes the action buttons column */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 p-8 relative z-10">
          {/* Title + meta */}
          <button
            onClick={() => onToggleExpand(run.id)}
            className="flex items-start gap-6 flex-1 text-left"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-14 h-14 ${gradient.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${gradient.glow}`}
            >
              <PlayCircle className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white tracking-tight mb-1">
                {run.name}
              </h3>
              <div className="flex items-center gap-4 text-[11px] font-body font-medium uppercase tracking-wider text-gray-500 dark:text-white/50">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDate(run.createdAt || new Date().toISOString())}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClipboardList className="w-3.5 h-3.5" />
                  {total} Test Cases
                </span>
              </div>
            </div>
          </button>

          {/* Progress — also clickable to expand */}
          <button
            onClick={() => onToggleExpand(run.id)}
            className="flex-1 max-w-md text-left"
          >
            <div className="flex items-center justify-between mb-2 text-[10px] font-bold uppercase tracking-widest">
              <span className="text-gray-500">Execution Progress</span>
              <span className="text-violet-600 dark:text-violet-400">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-black/[0.07] dark:bg-white/5 rounded-full overflow-hidden flex">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full shadow-lg shadow-emerald-500/30 transition-[width] duration-300 ease-out" style={{ width: `${(passed / total) * 100}%` }} />
              <div className="bg-gradient-to-r from-red-500 to-orange-500 h-full shadow-lg shadow-red-500/30 transition-[width] duration-300 ease-out" style={{ width: `${(failed / total) * 100}%` }} />
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-full shadow-lg shadow-yellow-500/30 transition-[width] duration-300 ease-out" style={{ width: `${(blocked / total) * 100}%` }} />
            </div>
            <div className="flex items-center gap-4 mt-4 text-[10px] font-bold uppercase tracking-widest">
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-3 h-3" /> {passed}</motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1.5 text-red-600 dark:text-red-400"><XCircle className="w-3 h-3" /> {failed}</motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1.5 text-amber-600 dark:text-yellow-400"><AlertCircle className="w-3 h-3" /> {blocked}</motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1.5 text-gray-500"><AlertCircle className="w-3 h-3" /> {untested}</motion.div>
            </div>
          </button>

          {/* Actions — outside any overflow-hidden parent */}
          <div className="flex items-center gap-2 flex-shrink-0 relative">
            <ActionDropdown
              isOpen={menuOpen}
              onToggle={() => setMenuOpen(v => !v)}
              actions={menuActions}
            />
            <motion.button
              onClick={() => onToggleExpand(run.id)}
              whileHover={{ scale: 1.1 }}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-white/5 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-ui"
            >
              {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Expanded results */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              // Tween, not the default spring: springs on `height` reflow the
              // page every frame for ~600ms with overshoot, which is the main
              // source of the expand/collapse stutter.
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border-t border-gray-100 dark:border-white/5 overflow-hidden"
            >
              <div className="px-8 py-6">
                {run.results && run.results.length > 0 ? (
                  <VirtualTestResultsList
                    results={run.results}
                    onUpdateStatus={(id, status) => onUpdateStatus?.(id, status)}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onSelectAll={handleSelectAll}
                    onClearSelection={handleClearSelection}
                    onBulkUpdate={handleBulkUpdate}
                  />
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">No results</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <EditTestRunModal
        isOpen={showEditModal}
        run={run}
        onClose={() => setShowEditModal(false)}
        onSave={(id, data) => { onEditSave?.(id, data); setShowEditModal(false); }}
        isSaving={isSaving}
      />

      <ConfirmModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Delete Test Run"
        itemName={run.name}
        description="This will permanently remove the test run and all its results."
        onConfirm={() => { onDelete?.(run.id); setShowDeleteConfirm(false); }}
      />
    </>
  );
}
