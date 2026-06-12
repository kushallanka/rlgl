import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { testcaseApi, TestCase, TestSuite, TestSection } from '../api/testcase.api';


export function useTestCases(projectId: string | null) {
  const queryClient = useQueryClient();

  // Suites query
  const {
    data: suites = [],
    isLoading: isLoadingSuites,
    error: suitesError,
    refetch: refetchSuites,
  } = useQuery({
    queryKey: ['suites', projectId],
    queryFn: () => testcaseApi.getSuites(projectId!).then(res => res.data?.data ?? res.data),
    enabled: !!projectId,
  });

  // Sections and cases state
  const [sections, setSections] = useState<Record<string, TestSection[]>>({});
  const [cases, setCases] = useState<Record<string, TestCase[]>>({});

  // Create suite mutation
  const createSuiteMutation = useMutation({
    mutationFn: (data: { name: string; description?: string; projectId: string }) =>
      testcaseApi.createSuite(data),
    onSuccess: () => {
      refetchSuites();
    },
  });

  // Update suite mutation
  const updateSuiteMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; description?: string } }) =>
      testcaseApi.updateSuite(id, data),
    onSuccess: () => {
      refetchSuites();
    },
  });

  // Delete suite mutation
  const deleteSuiteMutation = useMutation({
    mutationFn: testcaseApi.deleteSuite,
    onSuccess: (_, suiteId) => {
      // Remove suite from state and clear its sections/cases
      queryClient.setQueryData(['suites', projectId], (old: TestSuite[]) => 
        old?.filter(s => s.id !== suiteId)
      );
      setSections(prev => {
        const updated = { ...prev };
        delete updated[suiteId];
        return updated;
      });
    },
  });

  // Fetch sections for a suite
  const fetchSections = useCallback(async (suiteId: string) => {
    try {
      const res = await testcaseApi.getSections(suiteId);
      const sectionsData = res.data?.data ?? res.data;
      setSections(prev => ({ ...prev, [suiteId]: Array.isArray(sectionsData) ? sectionsData : [] }));
    } catch (err) {
      console.error('Failed to fetch sections:', err);
    }
  }, []);

  // Create section mutation
  const createSectionMutation = useMutation({
    mutationFn: (data: { name: string; suiteId: string }) =>
      testcaseApi.createSection(data),
    onSuccess: (res, _variables) => {
      // Refetch sections for the suite
      fetchSections(_variables.suiteId);
      // Initialize cases array for the new section
      setCases(prev => ({
        ...prev,
        [res.data.id]: []
      }));
    },
  });

  // Update section mutation
  const updateSectionMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) =>
      testcaseApi.updateSection(id, data),
    onSuccess: (_, variables) => {
      // Find which suite this section belongs to and refetch
      const suiteId = Object.keys(sections).find(key => 
        sections[key]?.some(s => s.id === variables.id)
      );
      if (suiteId) {
        fetchSections(suiteId);
      }
    },
  });

  // Delete section mutation
  const deleteSectionMutation = useMutation({
    mutationFn: testcaseApi.deleteSection,
    onSuccess: (_, sectionId) => {
      // Remove section from state and clear its cases
      setSections(prev => {
        const updated = { ...prev };
        for (const [suiteId, sectionList] of Object.entries(updated)) {
          updated[suiteId] = sectionList.filter(s => s.id !== sectionId);
        }
        return updated;
      });
      setCases(prev => {
        const updated = { ...prev };
        delete updated[sectionId];
        return updated;
      });
    },
  });

  // Fetch cases for a section
  const fetchCases = useCallback(async (sectionId: string) => {
    try {
      const res = await testcaseApi.getCases(sectionId);
      const casesData = res.data?.data ?? res.data;
      setCases(prev => ({ ...prev, [sectionId]: Array.isArray(casesData) ? casesData : [] }));
    } catch (err) {
      console.error('Failed to fetch cases:', err);
    }
  }, []);

  // Create case mutation
  const createCaseMutation = useMutation({
    mutationFn: (data: Partial<TestCase>) =>
      testcaseApi.createCase(data),
    onSuccess: (_, variables) => {
      if (variables.sectionId) {
        fetchCases(variables.sectionId);
      }
    },
  });

  // Update case mutation
  const updateCaseMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<TestCase> }) =>
      testcaseApi.updateCase(id, data),
    onSuccess: (result, _variables) => {
      // Find which section this case belongs to and refetch
      const updatedCase = result.data;
      const sectionId = updatedCase?.sectionId;
      if (sectionId) {
        fetchCases(sectionId);
      }
    },
  });

  // Delete case mutation
  const deleteCaseMutation = useMutation({
    mutationFn: testcaseApi.deleteCase,
    onSuccess: (_, variables) => {
      // Find which section this case belongs to and refetch
      const sectionId = Object.keys(cases).find(key => 
        cases[key]?.some(c => c.id === variables)
      );
      if (sectionId) {
        fetchCases(sectionId);
      }
    },
  });

  return {
    // Data
    suites,
    sections,
    cases,
    
    // Loading states
    isLoadingSuites,
    
    // Error states
    suitesError,
    
    // Actions
    refetchSuites,
    fetchSections,
    fetchCases,
    
    // Mutations
    createSuiteMutation,
    updateSuiteMutation,
    deleteSuiteMutation,
    createSectionMutation,
    updateSectionMutation,
    deleteSectionMutation,
    createCaseMutation,
    updateCaseMutation,
    deleteCaseMutation,
  };
}
