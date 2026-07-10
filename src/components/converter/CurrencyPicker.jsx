import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { CurrencyButton } from "./CurrencyButton";
import { CurrencySearch } from "./CurrencySearch";

export function CurrencyPicker({
  setIsOpen,
  setSelectedCurrency,
  selectedCurrency,
  isOpen,
}) {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currencySearch, setCurrencySearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://api.frankfurter.dev/v2/currencies",
        );

        setCurrencies(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();

        setHighlightedIndex((prev) =>
          Math.min(prev + 1, currencies.length - 1),
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();

        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      }

      if (e.key === "Enter") {
        e.preventDefault();

        handleButtonClick(visibleCurrencies[highlightedIndex].iso_code);
      }

      if (e.key === "Escape") {
        e.preventDefault();

        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, highlightedIndex, currencies]);

  const popularCurrencyCodes = ["USD", "EUR", "GBP"];

  const popularCurrencies = currencies.filter((currency) =>
    popularCurrencyCodes.includes(currency.iso_code),
  );

  const otherCurrencies = currencies.filter(
    (currency) => !popularCurrencyCodes.includes(currency.iso_code),
  );

  const filteredCurrencies = currencies.filter((currency) => {
    const query = currencySearch.toLowerCase();

    return (
      currency.iso_code.toLowerCase().includes(query) ||
      currency.name.toLowerCase().includes(query)
    );
  });

  function handleButtonClick(currency) {
    setSelectedCurrency(currency);
    setIsOpen(false);
  }

  const visibleCurrencies =
    currencySearch.trim() === ""
      ? [...popularCurrencies, ...otherCurrencies]
      : filteredCurrencies;

  const currencyIndexMap = {};

  visibleCurrencies.forEach((currency, index) => {
    currencyIndexMap[currency.iso_code] = index;
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({
        
        behavior: "smooth",
         block: "start",
      });
    }
  }, [isOpen]);

  return (
    <div
      className="absolute z-50 right-0 top-full mt-2 transition-all duration-300 w-[376px]
        max-sm:w-full bg-[#202022] border border-[#3D3D3D] p-[8px] space-y-2 rounded-lg
        "
      ref={dropdownRef}
    >
      {loading ? (
        <p className="px-4 py-20 text-sm text-gray-400 text-center">
          loading...
        </p>
      ) : (
        <>
          <CurrencySearch
            currencySearch={currencySearch}
            setCurrencySearch={setCurrencySearch}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />

          <div className="max-h-[394px] overflow-y-auto flex flex-col gap-[4px] scrollbar-hide">
            {currencySearch ? (
              <div className="currency-container w-full">
                {filteredCurrencies.map((currency) => {
                  const index = currencyIndexMap[currency.iso_code];

                  const flagCode = currency.iso_code.slice(0, 2).toLowerCase();

                  return (
                    <CurrencyButton
                      key={currency.iso_code}
                      flagCode={flagCode}
                      currency={currency}
                      setSelectedCurrency={setSelectedCurrency}
                      setIsOpen={setIsOpen}
                      selectedCurrency={selectedCurrency}
                      setCurrencySearch={setCurrencySearch}
                      handleButtonClick={handleButtonClick}
                      highlightedIndex={highlightedIndex}
                      index={index}
                    />
                  );
                })}
              </div>
            ) : (
              <>
                <div className="count-header p-[8px] flex items-center gap-[10px] border-b border-[#2E2E2E]">
                  <h3 className="text-[10px] md:text-xs text-[#9D9D9D] flex-1 text-left">
                    POPULAR
                  </h3>
                  <span className="text-[10px] md:text-xs text-[#9D9D9D]">
                    {popularCurrencies.length}
                  </span>
                </div>

                <div className="currency-container w-full">
                  {popularCurrencies.map((currency) => {
                    const index = currencyIndexMap[currency.iso_code];

                    const flagCode = currency.iso_code
                      .slice(0, 2)
                      .toLowerCase();

                    return (
                      <CurrencyButton
                        flagCode={flagCode}
                        currency={currency}
                        setSelectedCurrency={setSelectedCurrency}
                        setIsOpen={setIsOpen}
                        selectedCurrency={selectedCurrency}
                        key={currency.iso_code}
                        setCurrencySearch={setCurrencySearch}
                        handleButtonClick={handleButtonClick}
                        highlightedIndex={highlightedIndex}
                        index={index}
                      />
                    );
                  })}
                </div>

                <div className="count-header p-[8px] flex gap-[10px] border-b border-[#2E2E2E]">
                  <h3 className="text-[10px] md:text-xs text-[#9D9D9D] flex-1 text-left">
                    OTHER CURRENCIES
                  </h3>
                  <span className="text-[10px] md:text-xs text-[#9D9D9D]">
                    {otherCurrencies.length}
                  </span>
                </div>

                <div className="currency-container w-full">
                  {otherCurrencies.map((currency) => {
                    const index = currencyIndexMap[currency.iso_code];

                    const flagCode = currency.iso_code
                      .slice(0, 2)
                      .toLowerCase();

                    return (
                      <CurrencyButton
                        flagCode={flagCode}
                        currency={currency}
                        setSelectedCurrency={setSelectedCurrency}
                        setIsOpen={setIsOpen}
                        selectedCurrency={selectedCurrency}
                        key={currency.iso_code}
                        setCurrencySearch={setCurrencySearch}
                        handleButtonClick={handleButtonClick}
                        highlightedIndex={highlightedIndex}
                        index={index}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
