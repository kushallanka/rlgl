import { AlertCircle, CheckCircle2, HelpCircle, MinusCircle, X, XCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Checkbox } from '../../../shared/components/Checkbox';
import { DropdownPortal } from '../../../shared/components/DropdownPortal';
import { ColLabel, ListRow } from '../../../shared/components/table';
import { VirtualizedList } from '../../../shared/components/virtual/VirtualizedList';
import type { TestResult } from '../types';

const STATUSES = [
  { key: 'Passed', label: 'Passed', color: '#22c55e', cssKey: 'passed', Icon: CheckCircle2 },
  { key: 'Failed', label: 'Failed', color: '#ef4444', cssKey: 'failed', Icon: XCircle },
  { key: 'Blocked', label: 'Blocked', color: '#f97316', cssKey: 'blocked', Icon: AlertCircle },
  { key: 'NotApplicable', label: 'N/A', color: '#6b7280', cssKey: 'na', Icon: MinusCircle },
  { key: 'Untested', label: 'Untested', color: '#3b82f6', cssKey: 'untested', Icon: HelpCircle },
];

// Column widths — single source of truth shared between header and ResultRow
const COL = {
  id: 'w-14   flex-shrink-0 text-center',
  status: 'w-[96px] flex-shrink-0',
} as const;

/*
 * Same estimateSize strategy as VirtualTestCaseList: rows are ~40 px tall,
 * the 12 px of dead space at the bottom of each 52 px virtual slot is the
 * row separator — structurally outside any hovered element.
 */
const ESTIMATE_SIZE = 52;

interface ResultRowProps {
  result: TestResult;
  isSelected: boolean;
  onToggleSelect: () => void;
  onUpdateStatus: (status: string) => void;
}

function ResultRow({ result, isSelected, onToggleSelect, onUpdateStatus }: ResultRowProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const info = STATUSES.find((s) => s.key === result.status) ?? STATUSES[4]!;
  const { Icon } = info;

  return (
    <ListRow isSelected={isSelected}>
      {/* Checkbox */}
      <Checkbox checked={isSelected} onChange={onToggleSelect} />

      {/* ID badge */}
      <span
        className={`${COL.id} text-[11px] font-mono font-semibold text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 rounded-md px-2 py-0.5 truncate`}
      >
        T{result.testCaseId}
      </span>

      {/* Title */}
      <span className="text-sm text-gray-700 dark:text-white/80 flex-1 truncate min-w-0">
        {result.testCaseName ?? <span className="text-gray-400 dark:text-white/25 italic text-xs">No title</span>}
      </span>

      {/* Status badge — CSS classes handle both light and dark */}
      <button
        type="button"
        ref={btnRef}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className={`${COL.status} flex items-center justify-center gap-1.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest status-${info.cssKey} transition-opacity hover:opacity-80 active:opacity-60`}
      >
        <Icon className="w-3 h-3 flex-shrink-0" style={{ color: info.color }} />
        {info.label}
      </button>

      <DropdownPortal isOpen={open} triggerRef={btnRef} onClose={() => setOpen(false)} width={168}>
        {STATUSES.map((s) => {
          const SIcon = s.Icon;
          const active = result.status === s.key;
          return (
            <button
              type="button"
              key={s.key}
              onClick={() => {
                if (!active) onUpdateStatus(s.key);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-ui ${
                active ? 'opacity-40 cursor-default' : 'hover:bg-gray-100 dark:hover:bg-white/[0.08] cursor-pointer'
              }`}
            >
              <SIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.color }} />
              <span className="text-gray-700 dark:text-white/80">{s.label}</span>
              {active && <span className="ml-auto text-gray-400 dark:text-white/30 text-[9px]">current</span>}
            </button>
          );
        })}
      </DropdownPortal>
    </ListRow>
  );
}

interface VirtualTestResultsListProps {
  results: TestResult[];
  onUpdateStatus: (resultId: string, status: string) => void;
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  onSelectAll: () => void;
  onClearSelection: () => void;
  onBulkUpdate: (status: string) => void;
}

export function VirtualTestResultsList({
  results,
  onUpdateStatus,
  selectedIds,
  onToggleSelect,
  onSelectAll,
  onClearSelection,
  onBulkUpdate,
}: VirtualTestResultsListProps) {
  if (results.length === 0) return null;

  const allSelected = results.every((r) => selectedIds.has(r.id));
  const someSelected = selectedIds.size > 0;

  return (
    <div>
      {/* Column header — px-3 matches ListRow's px-3 exactly */}
      <div className="flex items-center gap-3 px-3 py-2 border-b border-black/5 dark:border-white/5 mb-1">
        <Checkbox
          checked={allSelected}
          indeterminate={!allSelected && someSelected}
          onChange={() => (allSelected ? onClearSelection() : onSelectAll())}
        />
        <ColLabel className={COL.id}>ID</ColLabel>
        <ColLabel className="flex-1">Title</ColLabel>
        <ColLabel className={`${COL.status} text-center`}>Status</ColLabel>

        <AnimatePresence>
          {someSelected && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="text-[10px] text-violet-600 dark:text-violet-400 font-semibold flex-shrink-0 whitespace-nowrap ml-1"
            >
              {selectedIds.size}/{results.length}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Bulk action bar */}
      <AnimatePresence>
        {someSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 rounded-xl bg-violet-50 dark:bg-violet-500/[0.08] border border-violet-200 dark:border-violet-500/20 mb-2 mx-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-300/70 mr-1">
                Set to:
              </span>
              {STATUSES.map((s) => {
                const SIcon = s.Icon;
                return (
                  <motion.button
                    key={s.key}
                    whileHover={{ opacity: 0.85 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onBulkUpdate(s.key)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-white/70 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/25 transition-ui"
                    style={{
                      backgroundColor: `rgba(${parseInt(s.color.slice(1, 3), 16)},${parseInt(s.color.slice(3, 5), 16)},${parseInt(s.color.slice(5, 7), 16)},0.10)`,
                    }}
                  >
                    <SIcon className="w-3 h-3" style={{ color: s.color }} />
                    {s.label}
                  </motion.button>
                );
              })}
              <button
                type="button"
                onClick={onClearSelection}
                className="ml-auto p-1 rounded-md text-gray-400 dark:text-white/25 hover:text-gray-600 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 transition-ui"
                title="Clear selection"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results list */}
      <VirtualizedList
        items={results}
        keyExtractor={(r) => r.id}
        estimateSize={ESTIMATE_SIZE}
        overscan={5}
        renderItem={(result) => (
          <ResultRow
            result={result}
            isSelected={selectedIds.has(result.id)}
            onToggleSelect={() => onToggleSelect(result.id)}
            onUpdateStatus={(status) => onUpdateStatus(result.id, status)}
          />
        )}
      />
    </div>
  );
}
