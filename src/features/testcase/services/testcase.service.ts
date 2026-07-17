import { testcaseApi } from '../api/testcase.api';
import type { TestCase, TestSection, TestSuite } from '../types/testcase.types';

export const testcaseService = {
  async getSuites(projectId: string): Promise<TestSuite[]> {
    const res = await testcaseApi.getSuites(projectId);
    return res.data?.data ?? res.data ?? [];
  },

  async getSections(suiteId: string): Promise<TestSection[]> {
    const res = await testcaseApi.getSections(suiteId);
    return res.data?.data ?? res.data ?? [];
  },

  async getCases(sectionId: string): Promise<TestCase[]> {
    const res = await testcaseApi.getCases(sectionId);
    return res.data?.data ?? res.data ?? [];
  },

  async findSuiteForSection(sections: Record<string, TestSection[]>, sectionId: string): Promise<string> {
    for (const [suiteId, sectionList] of Object.entries(sections)) {
      if (sectionList.find((s) => s.id === sectionId)) {
        return suiteId;
      }
    }
    return '';
  },
};
