import { MobileTab } from "./MobileTab";
import { DesktopTab } from "./DesktopTab";

const tabs = ["HISTORY", "COMPARE", "LOG", "FAVOURITE"];

export function TabHeader({ activeTab, setActiveTab, favorites}) {
  return (
    <>
      <MobileTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        favorites={favorites}
      />
      <DesktopTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        favorites={favorites}
      />
    </>
  );
}
