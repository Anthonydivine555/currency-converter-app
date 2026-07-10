import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRef, useEffect } from "react";

export function CurrencySearch({
  currencySearch,
  setCurrencySearch,
  isOpen
}) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="search-container w-full flex p-[12px] border border-[#9D9D9D] flex gap-[10px] rounded-[6px]">
      <MagnifyingGlassIcon size={14} color="white" />
      <input
        className="text-[#9D9D9D] text-[10px] md:text-xs flex-1 h-full outline-none"
        placeholder="Search currencies..."
        value={currencySearch}
        onChange={(e) => setCurrencySearch(e.target.value)}
        ref={searchInputRef}
      />
    </div>
  );
}
