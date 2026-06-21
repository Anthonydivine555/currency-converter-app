

function TabButton({ tabTitle, notification, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-5 text-white text-sm md:text-base flex items-center space-x-2 border-b-2 transition-colors ${
        active ? "border-[#CEF739] text-[#CEF739]" : "border-transparent"
      }`}
    >
      <span>{tabTitle}</span>

      {notification && (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#283300] text-[#CEF739] text-xs">
          {notification}
        </span>
      )}
    </button>
  );
}

export function TabHeader({activeTab, setActiveTab}) {

  return (
    <div className="flex gap-[8px] w-full border-b border-[#202022]">
      <TabButton
        tabTitle="HISTORY"
        active={activeTab === "HISTORY"}
        onClick={() => setActiveTab("HISTORY")}
      />

      <TabButton
        tabTitle="COMPARE"
        active={activeTab === "COMPARE"}
        onClick={() => setActiveTab("COMPARE")}
      />

      <TabButton
        tabTitle="FAVOURITE"
        notification="10"
        active={activeTab === "FAVOURITE"}
        onClick={() => setActiveTab("FAVOURITE")}
      />

      <TabButton
        tabTitle="LOG"
        notification="5"
        active={activeTab === "LOG"}
        onClick={() => setActiveTab("LOG")}
      />
    </div>
  );
}
