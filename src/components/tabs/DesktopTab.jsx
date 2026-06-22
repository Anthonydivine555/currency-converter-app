export function DesktopTab({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="md:flex gap-[8px] w-full border-b border-[#202022] hidden">
      {tabs.map((tab) => (
        <button
          onClick={() => setActiveTab(tab)}
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
                10
              </span>
            )}
        </button>
      ))}
    </div>
  );
}
