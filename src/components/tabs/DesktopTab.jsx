export function DesktopTab({ activeTab, setActiveTab, tabs, favorites, logs }) {

  function handleTabChange(tab) {   
    setActiveTab(tab);
  }

  return (
    <div className="md:flex gap-[8px] w-full border-b border-[#202022] hidden">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={`py-2 px-5 text-white text-sm md:text-base flex items-center space-x-2 border-b-2 transition-colors ${
            activeTab === tab
              ? "border-[#CEF739] text-[#CEF739]"
              : "border-transparent"
          }`}
        >
          <span>{tab}</span>

          { 
            (tab === "LOG" || tab === "FAVOURITE")  && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#283300] text-[#CEF739] text-xs">
                {tab === 'LOG' ? logs.length : favorites.length}
              </span>
            )}
        </button>
      ))}
    </div>
  );
}
