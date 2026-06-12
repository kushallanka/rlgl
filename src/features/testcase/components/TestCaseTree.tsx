import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, Layers, Layout, MoreVertical, Edit2, Trash2, Plus } from 'lucide-react';
import { TestCase, TestSuite, TestSection } from '../types/testcase.types';
import { DropdownPortal } from '../../../shared/components/DropdownPortal';
import { VirtualTestCaseList } from './VirtualTestCaseList';

interface TestCaseTreeProps {
  suites: TestSuite[];
  sections: Record<string, TestSection[]>;
  cases: Record<string, TestCase[]>;
  configSchema?: any;
  expandedSuites: Set<string>;
  expandedSections: Set<string>;
  onToggleSuite: (suiteId: string) => void;
  onToggleSection: (sectionId: string, suiteId: string) => void;
  onAddSection: (suiteId: string) => void;
  onAddCase: (sectionId: string) => void;
  onEditSuite: (suite: TestSuite) => void;
  onEditSection: (section: TestSection, suiteId: string) => void;
  onEditCase: (testCase: TestCase) => void;
  onDeleteSuite: (suite: TestSuite) => void;
  onDeleteSection: (section: TestSection, suiteId: string) => void;
  onDeleteCase: (testCase: TestCase) => void;
  permissions: {
    canCreateTestCase: boolean;
    canEditTestCase: boolean;
    canDeleteTestCase: boolean;
    canEditSuite: boolean;
    canDeleteSuite: boolean;
    canEditSection: boolean;
    canDeleteSection: boolean;
  };
  dropdownState: {
    openMenuId: string | null;
    toggleMenu: (id: string) => void;
    closeMenu: () => void;
    getTriggerRef: (id: string) => { current: HTMLElement | null };
    registerTriggerRef: (id: string, element: HTMLElement | null) => void;
  };
}

export function TestCaseTree({
  suites,
  sections,
  cases,
  configSchema,
  expandedSuites,
  expandedSections,
  onToggleSuite,
  onToggleSection,
  onAddSection,
  onAddCase,
  onEditSuite,
  onEditSection,
  onEditCase,
  onDeleteSuite,
  onDeleteSection,
  onDeleteCase,
  permissions,
  dropdownState,
}: TestCaseTreeProps) {
  const {
    canCreateTestCase,
    canEditTestCase,
    canDeleteTestCase,
    canEditSuite,
    canDeleteSuite,
    canEditSection,
    canDeleteSection,
  } = permissions;

  const { openMenuId, toggleMenu, closeMenu, getTriggerRef, registerTriggerRef } = dropdownState;

  const cardGradients = [
    { bg: 'accent-blue', glow: 'glow-blue', accent: '#3B82F6' },
    { bg: 'accent-purple', glow: 'glow-purple', accent: '#A855F7' },
    { bg: 'accent-green', glow: 'glow-green', accent: '#22C55E' },
    { bg: 'accent-orange', glow: 'glow-orange', accent: '#F97316' },
    { bg: 'accent-teal', glow: 'glow-teal', accent: '#14B8A6' },
    { bg: 'accent-pink', glow: 'glow-pink', accent: '#EC4899' },
  ];

  // Left accent colors per section index, cycling through a palette
  const sectionAccents = [
    'linear-gradient(to bottom, #8B5CF6, #3B82F6)',
    'linear-gradient(to bottom, #14B8A6, #22C55E)',
    'linear-gradient(to bottom, #F97316, #EC4899)',
    'linear-gradient(to bottom, #3B82F6, #06B6D4)',
    'linear-gradient(to bottom, #A855F7, #EC4899)',
    'linear-gradient(to bottom, #22C55E, #14B8A6)',
  ];

  if (suites.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="animate-float w-20 h-20 accent-purple rounded-3xl flex items-center justify-center glass-shadow mx-auto mb-6">
          <Layers className="w-10 h-10 text-gray-400 dark:text-white/70" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
          No test suites yet
        </h3>
        <p className="text-gray-500 dark:text-white/40 font-body text-sm">
          Create your first suite to organize your test cases
        </p>
      </motion.div>
    );
  }

  return (
    /* overflow-x-auto lets the table-like test-case rows scroll on narrow screens */
    <div className="space-y-4 overflow-x-auto">
      {suites.map((suite, idx) => {
        const gradient = cardGradients[idx % cardGradients.length] ?? cardGradients[0]!;
        const suiteSections = sections[suite.id] || [];
        const totalCasesInSuite = suiteSections.reduce(
          (sum, sec) => sum + (cases[sec.id] || []).length,
          0
        );

        return (
          <motion.div
            key={suite.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -2 }}
            className="liquid-glass overflow-hidden glass-shadow rounded-2xl group"
          >
            {/* Suite header */}
            <div className="w-full flex items-center justify-between p-5 hover:bg-black/[0.02] dark:hover:bg-white/5 transition-ui">
              <div
                onClick={() => onToggleSuite(suite.id)}
                className="flex-1 flex items-center gap-4 text-left cursor-pointer min-w-0"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onToggleSuite(suite.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-11 h-11 ${gradient.bg} rounded-xl flex items-center justify-center shadow-lg ${gradient.glow} flex-shrink-0`}
                >
                  <Layers className="w-5 h-5 text-white" />
                </motion.div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white tracking-tight truncate">
                      {suite.name}
                    </h3>
                    {/* Suite-level case count */}
                    <span className="text-[10px] font-semibold text-gray-400 dark:text-white/30 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/8 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                      {suiteSections.length} {suiteSections.length === 1 ? 'section' : 'sections'}
                      {totalCasesInSuite > 0 && ` · ${totalCasesInSuite} ${totalCasesInSuite === 1 ? 'case' : 'cases'}`}
                    </span>
                  </div>
                  {suite.description && (
                    <p className="text-xs text-gray-500 dark:text-white/40 font-body mt-0.5 truncate">
                      {suite.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <motion.div
                  animate={{ rotate: expandedSuites.has(suite.id) ? 90 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/50"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>

                {(canEditSuite || canDeleteSuite) && (
                  <>
                    <motion.div
                      ref={(el) => registerTriggerRef(`suite-${suite.id}`, el)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu(`suite-${suite.id}`);
                      }}
                      className={`p-2 rounded-lg transition-ui cursor-pointer ${
                        openMenuId === `suite-${suite.id}`
                          ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
                          : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && toggleMenu(`suite-${suite.id}`)}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </motion.div>

                    <DropdownPortal
                      isOpen={openMenuId === `suite-${suite.id}`}
                      triggerRef={getTriggerRef(`suite-${suite.id}`)}
                      onClose={closeMenu}
                      width={160}
                    >
                      {canEditSuite && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            closeMenu();
                            onEditSuite(suite);
                          }}
                          className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui font-body"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                      )}
                      {canDeleteSuite && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            closeMenu();
                            onDeleteSuite(suite);
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
              </div>
            </div>

            {/* Suite expanded content */}
            <AnimatePresence>
              {expandedSuites.has(suite.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="px-5 pb-5 space-y-2.5"
                >
                  <div className="h-px bg-black/5 dark:bg-white/5 mb-3" />

                  {suiteSections.length === 0 && (
                    <p className="text-xs text-gray-400 dark:text-white/30 font-body text-center py-4">
                      No sections yet
                    </p>
                  )}

                  {suiteSections.map((section, sIdx) => {
                    const caseCount = (cases[section.id] || []).length;
                    const isExpanded = expandedSections.has(section.id);

                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: sIdx * 0.05 }}
                        className="relative bg-gray-50/80 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-ui"
                      >
                        {/* Left accent strip — visible when section is expanded */}
                        <div
                          className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none transition-opacity duration-300"
                          style={{
                            background: sectionAccents[sIdx % sectionAccents.length],
                            opacity: isExpanded ? 0.75 : 0,
                          }}
                        />

                        {/* Section header */}
                        <div className="flex items-center justify-between px-4 py-3 hover:bg-black/[0.015] dark:hover:bg-white/5 transition-ui">
                          <div
                            onClick={() => onToggleSection(section.id, suite.id)}
                            className="flex-1 flex items-center gap-3 text-left cursor-pointer min-w-0"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) =>
                              e.key === 'Enter' && onToggleSection(section.id, suite.id)
                            }
                          >
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-7 h-7 accent-teal rounded-lg flex items-center justify-center flex-shrink-0 shadow-md glow-teal"
                            >
                              <Layout className="w-3.5 h-3.5 text-white" />
                            </motion.div>

                            <span className="font-semibold text-sm text-gray-800 dark:text-white/90 font-body truncate">
                              {section.name}
                            </span>

                            {/* Case count pill */}
                            <span className="text-[10px] font-semibold text-gray-400 dark:text-white/30 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/8 rounded-full px-2 py-0.5 flex-shrink-0 ml-0.5 whitespace-nowrap">
                              {caseCount === 0
                                ? 'empty'
                                : `${caseCount} ${caseCount === 1 ? 'case' : 'cases'}`}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                              className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/40"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>

                            {(canEditSection || canDeleteSection) && (
                              <>
                                <motion.div
                                  ref={(el) =>
                                    registerTriggerRef(`section-${section.id}`, el)
                                  }
                                  whileHover={{ scale: 1.1, rotate: 90 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMenu(`section-${section.id}`);
                                  }}
                                  className={`p-2 rounded-lg transition-ui cursor-pointer ${
                                    openMenuId === `section-${section.id}`
                                      ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
                                      : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                                  }`}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) =>
                                    e.key === 'Enter' && toggleMenu(`section-${section.id}`)
                                  }
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </motion.div>

                                <DropdownPortal
                                  isOpen={openMenuId === `section-${section.id}`}
                                  triggerRef={getTriggerRef(`section-${section.id}`)}
                                  onClose={closeMenu}
                                  width={160}
                                >
                                  {canEditSection && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        closeMenu();
                                        onEditSection(section, suite.id);
                                      }}
                                      className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui font-body"
                                    >
                                      <Edit2 className="w-4 h-4" />
                                      Edit
                                    </button>
                                  )}
                                  {canDeleteSection && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        closeMenu();
                                        onDeleteSection(section, suite.id);
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
                          </div>
                        </div>

                        {/* Section expanded: test cases */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                              className="px-3 overflow-hidden"
                            >
                              <div className="h-px bg-black/5 dark:bg-white/5 mb-1" />
                              <VirtualTestCaseList
                                cases={cases[section.id] || []}
                                sectionId={section.id}
                                configSchema={configSchema}
                                canCreateTestCase={canCreateTestCase}
                                canEditTestCase={canEditTestCase}
                                canDeleteTestCase={canDeleteTestCase}
                                openMenuId={openMenuId}
                                toggleMenu={toggleMenu}
                                closeMenu={closeMenu}
                                getTriggerRef={getTriggerRef}
                                registerTriggerRef={registerTriggerRef}
                                onEditCase={onEditCase}
                                onDeleteCase={onDeleteCase}
                                onAddCase={onAddCase}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}

                  {canCreateTestCase && (
                    <motion.button
                      whileHover={{ x: 3 }}
                      onClick={() => onAddSection(suite.id)}
                      className="flex items-center gap-2 text-xs font-body font-medium text-violet-500 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 transition-ui px-3 py-2 mt-1"
                    >
                      <Plus className="w-4 h-4" />
                      Add Section
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
