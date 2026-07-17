/**
 * Common Tailwind class constants to maintain consistency
 */
export const CLASS_CONSTANTS = {
  // Input styling
  INPUT_BASE:
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white',

  // Label styling
  LABEL: 'text-[10px] font-bold text-gray-400 uppercase tracking-widest',

  // Button base
  BUTTON_BASE: 'font-bold rounded-2xl transition-all active:scale-95',

  // Status colors
  STATUS_COLORS: {
    Passed: 'text-green-500 bg-green-500/10 border-green-500/20',
    Failed: 'text-red-500 bg-red-500/10 border-red-500/20',
    Blocked: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    NotApplicable: 'text-gray-500 bg-gray-500/10 border-gray-500/20',
    Untested: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  } as const,
};

/**
 * API endpoints constants
 */
export const API_ENDPOINTS = {
  // Projects
  PROJECTS: '/projects',

  // Test Cases
  TEST_RUNS: '/testruns',
  TEST_CASES: '/testcases',
  SUITES: '/testcases/suites',
  SECTIONS: '/testcases/sections',
  CASES: '/testcases/cases',
  RESULTS: '/testruns/results',

  // Admin Configuration
  CONFIG_SCHEMA: (projectId: string) => `/projects/${projectId}/config/schema`,
  CONFIG_TYPES: (projectId: string) => `/projects/${projectId}/config/types`,
  CONFIG_PRIORITIES: (projectId: string) => `/projects/${projectId}/config/priorities`,
  CONFIG_FIELDS: (projectId: string) => `/projects/${projectId}/config/fields`,
  CONFIG_ROLES: (projectId: string) => `/projects/${projectId}/roles`,
  CONFIG_USER_ROLES: (projectId: string) => `/projects/${projectId}/users/roles`,
  CONFIG_AUDIT: (projectId: string) => `/projects/${projectId}/config/audit`,
} as const;

export const STATUS_COLORS_HEX: Record<string, string> = {
  Passed: '#22c55e',
  Failed: '#ef4444',
  Blocked: '#f97316',
  NotApplicable: '#6b7280',
  Untested: '#3b82f6',
} as const;

export const getStatusBg = (status: string, opacity: number): string => {
  const hex = STATUS_COLORS_HEX[status] ?? STATUS_COLORS_HEX.Untested ?? '#3b82f6';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Test run result status options
 */
export const RESULT_STATUSES = ['Untested', 'Passed', 'Failed', 'Blocked', 'NotApplicable'] as const;

export type ResultStatus = (typeof RESULT_STATUSES)[number];

/**
 * Test case priority options
 */
export const PRIORITIES = ['Low', 'Medium', 'High'] as const;
export type Priority = (typeof PRIORITIES)[number];

/**
 * Test case type options
 */
export const TEST_CASE_TYPES = ['Functional', 'Performance', 'Security', 'Regression'] as const;
export type TestCaseType = (typeof TEST_CASE_TYPES)[number];
