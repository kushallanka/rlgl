interface AdminTabsProps {
  tabs: { id: string; label: string; permission: boolean }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  setActiveTab?: (tab: string) => void;
}

export function AdminTabs({ tabs, activeTab, onTabChange, setActiveTab }: AdminTabsProps) {
  const handleTabClick = (tabId: string) => {
    if (onTabChange) onTabChange(tabId);
    if (setActiveTab) setActiveTab(tabId);
  };

  return (
    <div className="border-b border-gray-200 dark:border-white/10">
      <nav className="flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-ui ${
              activeTab === tab.id
                ? 'border-orange-500 text-orange-500 dark:text-orange-400'
                : 'border-transparent text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70 hover:border-gray-300 dark:hover:border-white/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
