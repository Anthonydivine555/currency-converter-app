// import {TabButton} from 'TabButtons'
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import {useState} from 'react'

export function MobileTab({
  activeTab,
  setActiveTab,
  tabs,
  favorites
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center bg-[#171719] border-[#3D3D3D] justify-between rounded-lg border p-3"
      >
        <span className="text-white text-[16px]">{activeTab}</span>
        {isOpen ? (
          <span>
            <CaretUpIcon color="white" size={25} />
          </span>
        ) : (
          <span>
            <CaretDownIcon size={25} color="white" />
          </span>
        )}
      </button>

      <div
        className={`overflow-hidden absolute top-full mt-2 w-full rounded-[10px] border bg-[#171719] transition-all duration-300 ease ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-60"
            : "opacity-0 -translate-y-2 max-h-0"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setIsOpen(false);
            }}
            className={`py-2 px-5 text-sm md:text-base flex w-full items-center space-x-2  transition-colors ${
              activeTab === tab ? " bg-[#CEF739] " : " text-white"
            }`}
          >
            <span>{tab}</span>

            {(tab === "LOG" || tab === "FAVOURITE") && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#283300] text-[#CEF739] text-xs">
                {tab === 'LOG' ? '10' : favorites.length}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
