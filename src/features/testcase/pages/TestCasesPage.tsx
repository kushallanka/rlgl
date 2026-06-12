import { motion } from 'motion/react';
import { FolderKanban } from 'lucide-react';
import { useProjectStore } from '../../../stores/project.store';
import { usePermissionStore } from '../../../stores/permission.store';
import { useConfigSchema } from '../../../shared/hooks/useConfigSchema';
import { useTestCases } from '../hooks/useTestCases';
import { useTestCaseForms } from '../hooks/useTestCaseForms';
import { useToggleSet, useDropdownPortal } from '../../../hooks';
import { TestCaseHeader } from '../components/TestCaseHeader';
import { TestCaseTree } from '../components/TestCaseTree';
import { SuiteModal } from '../components/SuiteModal';
import { SectionModal } from '../components/SectionModal';
import { TestCaseModal } from '../components/TestCaseModal';
import { ConfirmModal } from '../../../shared/components/ConfirmModal';
import { FullPageSpinner } from '../../../shared/components/loading/FullPageSpinner';

export default function TestCasesPage() {
  const { activeProject } = useProjectStore();
  const configSchema = useConfigSchema(activeProject?.id || null).data ?? null;
  
  const {
    suites,
    sections,
    cases,
    isLoadingSuites,
    suitesError: _suitesError,
    refetchSuites: _refetchSuites,
    fetchSections,
    fetchCases,
    createSuiteMutation,
    updateSuiteMutation,
    deleteSuiteMutation,
    createSectionMutation,
    updateSectionMutation,
    deleteSectionMutation,
    createCaseMutation,
    updateCaseMutation,
    deleteCaseMutation,
  } = useTestCases(activeProject?.id || null);

  const {
    suiteForm,
    setSuiteForm,
    isAddingSuite,
    setIsAddingSuite,
    editingSuite,
    setEditingSuite,
    resetSuiteForm,
    sectionForm,
    setSectionForm,
    selectedSuiteForSection,
    setSelectedSuiteForSection,
    isAddingSection,
    setIsAddingSection,
    editingSection,
    setEditingSection,
    resetSectionForm,
    caseForm,
    setCaseForm,
    selectedSectionId,
    setSelectedSectionId,
    isAddingCase,
    setIsAddingCase,
    editingCase,
    setEditingCase,
    resetCaseForm,
    fieldErrors,
    setFieldErrors,
    isPriorityOpen,
    setIsPriorityOpen,
    isTypeOpen,
    setIsTypeOpen,
    isDeletingCase,
    setIsDeletingCase,
    deletingCase,
    setDeletingCase,
    isDeletingSuite,
    setIsDeletingSuite,
    deletingSuite,
    setDeletingSuite,
    isDeletingSection,
    setIsDeletingSection,
    deletingSection,
    setDeletingSection,
    deleteCaseSuccess,
    setDeleteCaseSuccess,
    deleteSuiteSuccess,
    setDeleteSuiteSuccess,
    deleteSectionSuccess,
    setDeleteSectionSuccess,
    deleteCaseError,
    setDeleteCaseError,
    deleteSuiteError,
    setDeleteSuiteError,
    deleteSectionError,
    setDeleteSectionError,
  } = useTestCaseForms(configSchema);

  // Expanded state for tree
  const { set: expandedSuites, toggle: toggleSuite } = useToggleSet<string>();
  const { set: expandedSections, toggle: toggleSection } = useToggleSet<string>();

  // Dropdown portal state
  const { openMenuId, toggleMenu, closeMenu, getTriggerRef, registerTriggerRef } = useDropdownPortal();

  // Permissions
  const hasPermission = usePermissionStore(s => s.hasPermission);
  const canCreateTestCase = hasPermission('testcase.create');
  const canEditTestCase = hasPermission('testcase.edit');
  const canDeleteTestCase = hasPermission('testcase.delete');
  const canEditSuite = hasPermission('testcase.edit');
  const canDeleteSuite = hasPermission('testcase.delete');
  const canEditSection = hasPermission('testcase.edit');
  const canDeleteSection = hasPermission('testcase.delete');

  // Handle suite toggle
  const handleToggleSuite = async (suiteId: string) => {
    toggleSuite(suiteId);
    if (!expandedSuites.has(suiteId) && !sections[suiteId]) {
      await fetchSections(suiteId);
    }
  };

  // Handle section toggle
  const handleToggleSection = async (sectionId: string, _suiteId: string) => {
    toggleSection(sectionId);
    if (!expandedSections.has(sectionId) && !cases[sectionId]) {
      await fetchCases(sectionId);
    }
  };

  // Handle suite creation
  const handleAddSuite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suiteForm.name.trim()) return;

    try {
      await createSuiteMutation.mutateAsync({
        name: suiteForm.name,
        description: suiteForm.description,
        projectId: activeProject?.id!,
      });
      resetSuiteForm();
    } catch (err: any) {
      console.error('Failed to create suite:', err);
    }
  };

  // Handle suite update
  const handleUpdateSuite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suiteForm.name.trim() || !editingSuite) return;

    try {
      await updateSuiteMutation.mutateAsync({
        id: editingSuite.id,
        data: { name: suiteForm.name, description: suiteForm.description },
      });
      resetSuiteForm();
    } catch (err: any) {
      console.error('Failed to update suite:', err);
    }
  };

  // Handle suite deletion
  const handleConfirmDeleteSuite = async () => {
    if (!deletingSuite) return;

    try {
      await deleteSuiteMutation.mutateAsync(deletingSuite.id);
      setDeleteSuiteSuccess(true);
      setTimeout(() => {
        setIsDeletingSuite(false);
        setDeletingSuite(null);
        setDeleteSuiteSuccess(false);
      }, 1500);
    } catch (err: any) {
      setDeleteSuiteError(err.response?.data?.error || 'Failed to delete suite');
    }
  };

  // Handle section creation
  const handleAddSection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionForm.name.trim() || !selectedSuiteForSection) return;

    try {
      await createSectionMutation.mutateAsync({
        name: sectionForm.name,
        suiteId: selectedSuiteForSection,
      });
      resetSectionForm();
    } catch (err: any) {
      console.error('Failed to create section:', err);
    }
  };

  // Handle section update
  const handleUpdateSection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionForm.name.trim() || !editingSection) return;

    try {
      await updateSectionMutation.mutateAsync({
        id: editingSection.id,
        data: { name: sectionForm.name },
      });
      resetSectionForm();
    } catch (err: any) {
      console.error('Failed to update section:', err);
    }
  };

  // Handle section deletion
  const handleConfirmDeleteSection = async () => {
    if (!deletingSection) return;

    try {
      await deleteSectionMutation.mutateAsync(deletingSection.id);
      setDeleteSectionSuccess(true);
      setTimeout(() => {
        setIsDeletingSection(false);
        setDeletingSection(null);
        setDeleteSectionSuccess(false);
      }, 1500);
    } catch (err: any) {
      setDeleteSectionError(err.response?.data?.error || 'Failed to delete section');
    }
  };

  // Handle test case creation
  const handleAddTestCase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseForm.title.trim() || !selectedSectionId) return;

    try {
      // Find suiteId for the selected section
      let foundSuiteId = '';
      for (const [suiteId, sectionList] of Object.entries(sections)) {
        if (sectionList.find((s: any) => s.id === selectedSectionId)) {
          foundSuiteId = suiteId;
          break;
        }
      }

      const stepsArray = caseForm.steps.split('\n').filter(step => step.trim());

      await createCaseMutation.mutateAsync({
        title: caseForm.title,
        description: caseForm.description,
        preconditions: caseForm.preconditions,
        steps: stepsArray,
        expectedResult: caseForm.expectedResult,
        priority: caseForm.priority,
        type: caseForm.type,
        ...(activeProject?.id ? { projectId: activeProject.id } : {}),
        sectionId: selectedSectionId,
        suiteId: foundSuiteId,
        customFieldValues: caseForm.customFieldValues,
      });
      resetCaseForm();
    } catch (err: any) {
      console.error('Failed to create test case:', err);
    }
  };

  // Handle test case update
  const handleUpdateTestCase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseForm.title.trim() || !editingCase) return;

    try {
      const stepsArray = caseForm.steps.split('\n').filter(step => step.trim());

      await updateCaseMutation.mutateAsync({
        id: editingCase.id,
        data: {
          title: caseForm.title,
          description: caseForm.description,
          preconditions: caseForm.preconditions,
          steps: stepsArray,
          expectedResult: caseForm.expectedResult,
          priority: caseForm.priority,
          type: caseForm.type,
          customFieldValues: caseForm.customFieldValues,
        },
      });
      resetCaseForm();
    } catch (err: any) {
      console.error('Failed to update test case:', err);
    }
  };

  // Handle test case deletion
  const handleConfirmDeleteCase = async () => {
    if (!deletingCase) return;

    try {
      await deleteCaseMutation.mutateAsync(deletingCase.id);
      setDeleteCaseSuccess(true);
      setTimeout(() => {
        setIsDeletingCase(false);
        setDeletingCase(null);
        setDeleteCaseSuccess(false);
      }, 1500);
    } catch (err: any) {
      setDeleteCaseError(err.response?.data?.error || 'Failed to delete test case');
    }
  };

  if (!activeProject) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20 space-y-4"
      >
        <div className="animate-float w-24 h-24 bg-gray-500/20 rounded-3xl flex items-center justify-center glass-shadow">
          <FolderKanban className="w-12 h-12 text-gray-400 dark:text-white/50" />
        </div>
        <p className="text-gray-500 dark:text-white/50 font-body">Please select a project first</p>
      </motion.div>
    );
  }

  if (isLoadingSuites) {
    return <FullPageSpinner label="Loading test repository..." />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <TestCaseHeader
        projectName={activeProject.name}
        canCreateTestCase={canCreateTestCase}
        onAddSuite={() => setIsAddingSuite(true)}
      />

      <TestCaseTree
        suites={suites}
        sections={sections}
        cases={cases}
        configSchema={configSchema}
        expandedSuites={expandedSuites}
        expandedSections={expandedSections}
        onToggleSuite={handleToggleSuite}
        onToggleSection={handleToggleSection}
        onAddSection={(suiteId) => {
          setSelectedSuiteForSection(suiteId);
          setIsAddingSection(true);
        }}
        onAddCase={(sectionId) => {
          setSelectedSectionId(sectionId);
          setIsAddingCase(true);
        }}
        onEditSuite={(suite) => {
          setEditingSuite(suite);
          setSuiteForm({ name: suite.name, description: suite.description || '' });
          setIsAddingSuite(true);
        }}
        onEditSection={(section, suiteId) => {
          setEditingSection({ ...section, suiteId });
          setSectionForm({ name: section.name });
          setIsAddingSection(true);
        }}
        onEditCase={(testCase) => {
          setEditingCase(testCase);
          setCaseForm({
            title: testCase.title,
            description: testCase.description || '',
            preconditions: testCase.preconditions || '',
            steps: Array.isArray(testCase.steps) ? testCase.steps.join('\n') : '',
            expectedResult: testCase.expectedResult || '',
            priority: testCase.priority,
            type: testCase.type,
            customFieldValues: testCase.customFieldValues || {},
          });
          setIsAddingCase(true);
        }}
        onDeleteSuite={(suite) => {
          setDeletingSuite(suite);
          setIsDeletingSuite(true);
        }}
        onDeleteSection={(section, suiteId) => {
          setDeletingSection({ ...section, suiteId });
          setIsDeletingSection(true);
        }}
        onDeleteCase={(testCase) => {
          setDeletingCase(testCase);
          setIsDeletingCase(true);
        }}
        permissions={{
          canCreateTestCase,
          canEditTestCase,
          canDeleteTestCase,
          canEditSuite,
          canDeleteSuite,
          canEditSection,
          canDeleteSection,
        }}
        dropdownState={{ openMenuId, toggleMenu, closeMenu, getTriggerRef, registerTriggerRef }}
      />

      {/* Modals */}
      <SuiteModal
        isOpen={isAddingSuite}
        onClose={resetSuiteForm}
        formData={suiteForm}
        setFormData={setSuiteForm}
        onSubmit={editingSuite ? handleUpdateSuite : handleAddSuite}
        isEditing={!!editingSuite}
        isLoading={createSuiteMutation.isPending || updateSuiteMutation.isPending}
      />

      <SectionModal
        isOpen={isAddingSection}
        onClose={resetSectionForm}
        formData={sectionForm}
        setFormData={setSectionForm}
        suites={suites}
        selectedSuite={selectedSuiteForSection}
        setSelectedSuite={setSelectedSuiteForSection}
        onSubmit={editingSection ? handleUpdateSection : handleAddSection}
        isEditing={!!editingSection}
        isLoading={createSectionMutation.isPending || updateSectionMutation.isPending}
      />

      <TestCaseModal
        isOpen={isAddingCase}
        onClose={resetCaseForm}
        formData={caseForm}
        setFormData={setCaseForm}
        configSchema={configSchema}
        fieldErrors={fieldErrors}
        setFieldErrors={setFieldErrors}
        isPriorityOpen={isPriorityOpen}
        setIsPriorityOpen={setIsPriorityOpen}
        isTypeOpen={isTypeOpen}
        setIsTypeOpen={setIsTypeOpen}
        onSubmit={editingCase ? handleUpdateTestCase : handleAddTestCase}
        isEditing={!!editingCase}
        isLoading={createCaseMutation.isPending || updateCaseMutation.isPending}
      />

      <ConfirmModal
        isOpen={isDeletingSuite}
        onClose={() => setIsDeletingSuite(false)}
        title="Delete Suite?"
        itemName={deletingSuite?.name}
        description="This will also delete all sections and test cases within this suite. This action cannot be undone."
        onConfirm={handleConfirmDeleteSuite}
        isSuccess={deleteSuiteSuccess}
        error={deleteSuiteError}
        isLoading={deleteSuiteMutation.isPending}
      />

      <ConfirmModal
        isOpen={isDeletingSection}
        onClose={() => setIsDeletingSection(false)}
        title="Delete Section?"
        itemName={deletingSection?.name}
        description="This will also delete all test cases within this section. This action cannot be undone."
        onConfirm={handleConfirmDeleteSection}
        isSuccess={deleteSectionSuccess}
        error={deleteSectionError}
        isLoading={deleteSectionMutation.isPending}
      />

      <ConfirmModal
        isOpen={isDeletingCase}
        onClose={() => setIsDeletingCase(false)}
        title="Delete Test Case?"
        itemName={deletingCase?.title}
        onConfirm={handleConfirmDeleteCase}
        isSuccess={deleteCaseSuccess}
        error={deleteCaseError}
        isLoading={deleteCaseMutation.isPending}
      />
    </motion.div>
  );
}
