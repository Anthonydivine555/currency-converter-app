import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRef, useEffect } from "react";

export function CurrencySearch({ currencySearch, setCurrencySearch, isOpen}) {

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      className="search-container w-full flex p-[12px] border border-[#9D9D9D] flex gap-[10px] rounded-[6px] focus:outline-none focus-within:border-[#CEF739]
    focus-within:ring-1
    focus-within:ring-[#CEF739]
    "
    >
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
