import { useState } from 'react';
import { SectionFormData, SuiteFormData, TestCaseFormData } from '../types/testcase.types';

export function useTestCaseForms(configSchema?: any) {
  // Suite form state
  const [suiteForm, setSuiteForm] = useState<SuiteFormData>({
    name: '',
    description: '',
  });
  const [isAddingSuite, setIsAddingSuite] = useState(false);
  const [editingSuite, setEditingSuite] = useState<any>(null);

  // Section form state
  const [sectionForm, setSectionForm] = useState<SectionFormData>({
    name: '',
  });
  const [selectedSuiteForSection, setSelectedSuiteForSection] = useState<string | null>(null);
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [editingSection, setEditingSection] = useState<any>(null);

  // Test case form state
  const [caseForm, setCaseForm] = useState<TestCaseFormData>({
    title: '',
    description: '',
    preconditions: '',
    steps: '',
    expectedResult: '',
    priority: configSchema?.priorities?.[0]?.name || '',
    type: configSchema?.types?.[0]?.name || '',
    customFieldValues: {},
  });
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [isAddingCase, setIsAddingCase] = useState(false);
  const [editingCase, setEditingCase] = useState<any>(null);

  // UI state
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  // Delete confirmation states
  const [isDeletingCase, setIsDeletingCase] = useState(false);
  const [deletingCase, setDeletingCase] = useState<any>(null);
  const [isDeletingSuite, setIsDeletingSuite] = useState(false);
  const [deletingSuite, setDeletingSuite] = useState<any>(null);
  const [isDeletingSection, setIsDeletingSection] = useState(false);
  const [deletingSection, setDeletingSection] = useState<any>(null);

  // Success states
  const [deleteCaseSuccess, setDeleteCaseSuccess] = useState(false);
  const [deleteSuiteSuccess, setDeleteSuiteSuccess] = useState(false);
  const [deleteSectionSuccess, setDeleteSectionSuccess] = useState(false);

  // Error states
  const [deleteCaseError, setDeleteCaseError] = useState<string | null>(null);
  const [deleteSuiteError, setDeleteSuiteError] = useState<string | null>(null);
  const [deleteSectionError, setDeleteSectionError] = useState<string | null>(null);

  // Reset functions
  const resetSuiteForm = () => {
    setSuiteForm({ name: '', description: '' });
    setIsAddingSuite(false);
    setEditingSuite(null);
  };

  const resetSectionForm = () => {
    setSectionForm({ name: '' });
    setSelectedSuiteForSection(null);
    setIsAddingSection(false);
    setEditingSection(null);
  };

  const resetCaseForm = () => {
    setCaseForm({
      title: '',
      description: '',
      preconditions: '',
      steps: '',
      expectedResult: '',
      priority: configSchema?.priorities?.[0]?.name || '',
      type: configSchema?.types?.[0]?.name || '',
      customFieldValues: {},
    });
    setSelectedSectionId(null);
    setIsAddingCase(false);
    setEditingCase(null);
    setFieldErrors({});
    setIsPriorityOpen(false);
    setIsTypeOpen(false);
  };

  const resetDeleteStates = () => {
    setIsDeletingCase(false);
    setDeletingCase(null);
    setDeleteCaseSuccess(false);
    setDeleteCaseError(null);

    setIsDeletingSuite(false);
    setDeletingSuite(null);
    setDeleteSuiteSuccess(false);
    setDeleteSuiteError(null);

    setIsDeletingSection(false);
    setDeletingSection(null);
    setDeleteSectionSuccess(false);
    setDeleteSectionError(null);
  };

  return {
    // Suite form
    suiteForm,
    setSuiteForm,
    isAddingSuite,
    setIsAddingSuite,
    editingSuite,
    setEditingSuite,
    resetSuiteForm,

    // Section form
    sectionForm,
    setSectionForm,
    selectedSuiteForSection,
    setSelectedSuiteForSection,
    isAddingSection,
    setIsAddingSection,
    editingSection,
    setEditingSection,
    resetSectionForm,

    // Test case form
    caseForm,
    setCaseForm,
    selectedSectionId,
    setSelectedSectionId,
    isAddingCase,
    setIsAddingCase,
    editingCase,
    setEditingCase,
    resetCaseForm,

    // UI state
    fieldErrors,
    setFieldErrors,
    isPriorityOpen,
    setIsPriorityOpen,
    isTypeOpen,
    setIsTypeOpen,

    // Delete states
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

    // Success states
    deleteCaseSuccess,
    setDeleteCaseSuccess,
    deleteSuiteSuccess,
    setDeleteSuiteSuccess,
    deleteSectionSuccess,
    setDeleteSectionSuccess,

    // Error states
    deleteCaseError,
    setDeleteCaseError,
    deleteSuiteError,
    setDeleteSuiteError,
    deleteSectionError,
    setDeleteSectionError,

    // Reset all
    resetDeleteStates,
  };
}
