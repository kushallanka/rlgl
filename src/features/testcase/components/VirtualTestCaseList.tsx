import { Edit2, MoreVertical, Plus, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { DropdownPortal } from '../../../shared/components/DropdownPortal';
import { ColLabel, ListRow } from '../../../shared/components/table';
import { VirtualizedTreeList } from '../../../shared/components/virtual/VirtualizedList';
import type { TestCase } from '../types/testcase.types';
import { getColorWithOpacity, getPriorityColor, getTypeColor } from '../utils/color.utils';

// Column widths — single source of truth shared between header and rows
const COL = {
  dot: 'w-2.5  flex-shrink-0',
  priority: 'w-[80px]  flex-shrink-0 text-center',
  type: 'w-[96px]  flex-shrink-0 text-center',
  actions: 'w-8    flex-shrink-0',
} as const;

/*
 * estimateSize is deliberately larger than the rendered row height (~40 px).
 * The 12 px of dead space at the bottom of every virtual slot acts as the
 * row separator.  Because that gap is outside any element, hover backgrounds
 * and row dividers can never share a pixel — the overlap bug is structurally
 * impossible with this approach.
 */
const ESTIMATE_SIZE = 52;

interface VirtualTestCaseListProps {
  cases: TestCase[];
  sectionId: string;
  configSchema?: any;
  canCreateTestCase: boolean;
  canEditTestCase: boolean;
  canDeleteTestCase: boolean;
  openMenuId: string | null;
  toggleMenu: (id: string) => void;
  closeMenu: () => void;
  getTriggerRef: (id: string) => { current: HTMLElement | null };
  registerTriggerRef: (id: string, element: HTMLElement | null) => void;
  onEditCase: (testCase: TestCase) => void;
  onDeleteCase: (testCase: TestCase) => void;
  onAddCase: (sectionId: string) => void;
}

export function VirtualTestCaseList({
  cases: testCases,
  sectionId,
  configSchema,
  canCreateTestCase,
  canEditTestCase,
  canDeleteTestCase,
  openMenuId,
  toggleMenu,
  closeMenu,
  getTriggerRef,
  registerTriggerRef,
  onEditCase,
  onDeleteCase,
  onAddCase,
}: VirtualTestCaseListProps) {
  if (testCases.length === 0 && !canCreateTestCase) return null;

  const showActions = canEditTestCase || canDeleteTestCase;

  return (
    <div className="pb-3">
      {testCases.length > 0 && (
        <>
          {/* Column header — px-3 matches ListRow's px-3 exactly */}
          <div className="flex items-center gap-3 px-3 py-2">
            <div className={COL.dot} />
            <ColLabel className="flex-1">Title</ColLabel>
            <ColLabel className={COL.priority}>Priority</ColLabel>
            <ColLabel className={COL.type}>Type</ColLabel>
            {showActions && <div className={COL.actions} />}
          </div>
          <div className="h-px bg-black/5 dark:bg-white/5 mx-3 mb-1" />

          <VirtualizedTreeList
            items={testCases}
            keyExtractor={(tc) => tc.id}
            estimateSize={ESTIMATE_SIZE}
            overscan={3}
            maxHeight={400}
            renderItem={(testCase) => {
              const priorityColor = getPriorityColor(testCase.priority, configSchema);
              const typeColor = getTypeColor(testCase.type, configSchema);
              const isMenuOpen = openMenuId === testCase.id;

              return (
                <ListRow isActive={isMenuOpen}>
                  {/* Priority dot */}
                  <div
                    className={COL.dot}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: getColorWithOpacity(priorityColor, 0.75),
                      boxShadow: `0 0 5px ${getColorWithOpacity(priorityColor, 0.4)}`,
                    }}
                  />

                  {/* Title */}
                  <span className="flex-1 text-sm font-medium text-gray-800 dark:text-white/85 truncate min-w-0">
                    {testCase.title}
                  </span>

                  {/* Priority badge */}
                  <span
                    className={`${COL.priority} text-[10px] font-semibold py-1 rounded-md truncate`}
                    style={{
                      color: priorityColor,
                      backgroundColor: getColorWithOpacity(priorityColor, 0.12),
                    }}
                  >
                    {testCase.priority}
                  </span>

                  {/* Type badge */}
                  <span
                    className={`${COL.type} text-[10px] font-bold uppercase tracking-wider py-1 rounded-md border truncate`}
                    style={{
                      color: getColorWithOpacity(typeColor, 0.9),
                      backgroundColor: getColorWithOpacity(typeColor, 0.12),
                      borderColor: getColorWithOpacity(typeColor, 0.2),
                    }}
                  >
                    {testCase.type}
                  </span>

                  {/* Actions */}
                  {showActions && (
                    <>
                      <button
                        type="button"
                        ref={(el) => registerTriggerRef(testCase.id, el)}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(testCase.id);
                        }}
                        className={`${COL.actions} h-8 flex items-center justify-center rounded-lg transition-colors ${
                          isMenuOpen
                            ? 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white'
                            : 'text-gray-300 dark:text-white/20 hover:text-gray-600 dark:hover:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10'
                        }`}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      <DropdownPortal
                        isOpen={isMenuOpen}
                        triggerRef={getTriggerRef(testCase.id)}
                        onClose={closeMenu}
                        width={160}
                      >
                        {canEditTestCase && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeMenu();
                              onEditCase(testCase);
                            }}
                            className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui font-body"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                        )}
                        {canDeleteTestCase && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeMenu();
                              onDeleteCase(testCase);
                            }}
                            className="w-full px-4 py-3 flex items-center gap-3 text-sm text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-500/30 dark:hover:text-red-200 transition-ui font-body border-t border-gray-100 dark:border-white/5"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        )}
                      </DropdownPortal>
                    </>
                  )}
                </ListRow>
              );
            }}
          />
        </>
      )}

      {canCreateTestCase && (
        <motion.button
          whileHover={{ borderColor: 'rgba(139, 92, 246, 0.45)' }}
          whileTap={{ scale: 0.995 }}
          onClick={() => onAddCase(sectionId)}
          className="w-full mt-2 py-2.5 border border-dashed border-black/10 dark:border-white/10 rounded-lg text-xs font-body font-medium text-gray-400 dark:text-white/35 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/5 transition-ui flex items-center justify-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Test Case
        </motion.button>
      )}
    </div>
  );
}
