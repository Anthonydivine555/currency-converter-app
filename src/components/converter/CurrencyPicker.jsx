import axios from "axios";
import { useState, useEffect } from "react";
import { CurrencyButton } from "./CurrencyButton";
import { CurrencySearch } from "./CurrencySearch";


export function CurrencyPicker({
  isOpen,
  setIsOpen,
  setSelectedCurrency,
  selectedCurrency,
}) {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currencySearch, setCurrencySearch] = useState("");

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

  return (
    <div
      className={`absolute z-50 right-0 top-full mt-2 transition-all duration-300 w-[376px]
        max-sm:w-full bg-[#202022] border border-[#3D3D3D] p-[8px] space-y-2 rounded-lg
        ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"} 
        `}>
      <CurrencySearch
        currencySearch={currencySearch}
        setCurrencySearch={setCurrencySearch}
      />

      <div className="max-h-[394px] overflow-y-auto flex flex-col gap-[4px] scrollbar-hide">
        {currencySearch ? (
          <div className="currency-container w-full">
            {filteredCurrencies.map((currency) => {
              const flagCode = currency.iso_code.slice(0, 2).toLowerCase();

              return (
                <CurrencyButton
                  key={currency.iso_code}
                  flagCode={flagCode}
                  currency={currency}
                  setSelectedCurrency={setSelectedCurrency}
                  setIsOpen={setIsOpen}
                  selectedCurrency={selectedCurrency}
                  key={currency.iso_code}
                  setCurrencySearch={setCurrencySearch}
                />
              );
            })}
          </div>
        ) : (
          <>
            <div className="count-header p-[8px] flex gap-[10px] border-b border-[#2E2E2E]">
              <h3 className="text-[10px] md:text-xs text-[#9D9D9D] flex-1">
                POPULAR
              </h3>
              <span className="text-[10px] md:text-xs text-[#9D9D9D]">
                {popularCurrencies.length}
              </span>
            </div>
            {loading && (
              <p className="px-4 py-20 text-sm text-gray-400 text-center">
                {" "}
                loading...
              </p>
            )}

            <div className="currency-container w-full">
              {popularCurrencies.map((currency) => {
                const flagCode = currency.iso_code.slice(0, 2).toLowerCase();

                return (
                  <CurrencyButton
                    flagCode={flagCode}
                    currency={currency}
                    setSelectedCurrency={setSelectedCurrency}
                    setIsOpen={setIsOpen}
                    selectedCurrency={selectedCurrency}
                    key={currency.iso_code}
                    setCurrencySearch={setCurrencySearch}
                  />
                );
              })}
            </div>

            <div className="count-header p-[8px] flex gap-[10px] border-b border-[#2E2E2E]">
              <h3 className="text-[10px] md:text-xs text-[#9D9D9D] flex-1">
                OTHER CURRENCIES
              </h3>
              <span className="text-[10px] md:text-xs text-[#9D9D9D]">
                {otherCurrencies.length}
              </span>
            </div>
            {loading && (
              <p className="px-4 py-3 text-sm text-gray-400 text-center">
                {" "}
                loading...
              </p>
            )}
            <div className="currency-container w-full">
              {otherCurrencies.map((currency) => {
                const flagCode = currency.iso_code.slice(0, 2).toLowerCase();

                return (
                  <CurrencyButton
                    flagCode={flagCode}
                    currency={currency}
                    setSelectedCurrency={setSelectedCurrency}
                    setIsOpen={setIsOpen}
                    selectedCurrency={selectedCurrency}
                    key={currency.iso_code}
                    setCurrencySearch={setCurrencySearch}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
