import { MobileTab } from "./MobileTab";
import { DesktopTab } from "./DesktopTab";

const tabs = ["HISTORY", "COMPARE", "LOG", "FAVOURITE"];

export function TabHeader({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  return (
    <>
      <MobileTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tabs={tabs}
      />
      <DesktopTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
    </>
  );
}
