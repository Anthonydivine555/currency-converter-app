import { CheckIcon } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

export function CurrencyButton({
  currency,
  flagCode,
  selectedCurrency,
  setCurrencySearch,
  handleButtonClick,
  highlightedIndex,
  index,
}) {
  const currencyRefs = useRef([]);
  useEffect(() => {
    currencyRefs.current[highlightedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [highlightedIndex]);

  return (
    <button
      className={`px-[8px] py-[12px] flex gap-[12px] items-center w-full ${index === highlightedIndex ? "border-2 border-[#CEF739]" : ""}`}
      onClick={() => {
        handleButtonClick(currency.iso_code);
        setCurrencySearch("");
      }}
      ref={(element) => {
        currencyRefs.current[index] = element;
      }}
      tabIndex={-1}
    >
      <div className="currency-flag w-[20px] h-[20px] rounded-full overflow-hidden">
        <img
          src={`https://flagcdn.com/w40/${flagCode}.png`}
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      <span className="text-xs md:text-sm text-white">{currency.iso_code}</span>
      <span className="text-xs md:text-sm text-[#9D9D9D] flex-1 text-left">
        {currency.name}
      </span>
      {selectedCurrency === currency.iso_code && (
        <CheckIcon size={12} color="white" />
      )}
    </button>
  );
}
