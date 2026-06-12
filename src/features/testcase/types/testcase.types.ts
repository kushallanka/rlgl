export interface TestCase {
  id: string;
  title: string;
  description?: string;
  preconditions?: string;
  steps: string[];
  expectedResult?: string;
  priority: string;
  type: string;
  sectionId: string;
  suiteId: string;
  projectId: string;
  customFieldValues?: Record<string, any>;
}

export interface TestSuite {
  id: string;
  name: string;
  description?: string;
  projectId: string;
}

export interface TestSection {
  id: string;
  name: string;
  suiteId: string;
}

export interface TestCaseFormData {
  title: string;
  description: string;
  preconditions: string;
  steps: string;
  expectedResult: string;
  priority: string;
  type: string;
  customFieldValues: Record<string, any>;
}

export interface SuiteFormData {
  name: string;
  description: string;
}

export interface SectionFormData {
  name: string;
}

export type PriorityGradient = {
  bg: string;
  glow: string;
  color: string;
};

export type CardGradient = {
  bg: string;
  glow: string;
  accent: string;
};
