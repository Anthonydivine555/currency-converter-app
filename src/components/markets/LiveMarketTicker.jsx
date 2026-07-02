import axios from "axios";
import { useState, useEffect } from "react";
import { CurrencyPair } from "./CurrencyPair";
import { getDateString } from "../../utils/dateString.js";

export function LiveMarketTicker() {
  const [currencyPairs, setCurrencyPairs] = useState([]);
  const [currencyRate, setCurrencyRate] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);

      setError(null);

      try {
        const response = await axios.get(
          "https://api.frankfurter.dev/v2/rates?base=USD",
        );

        setCurrencyPairs(response.data);
      } catch (error) {
        setError("Failed to fetch currency rates.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  async function updateCurrencyRates() {
    const updated = {};

    await Promise.all(
      currencyPairs.map(async (pair) => {
        const yesterdayDate = getDateString(1);

        const [today, yesterday] = await Promise.all([
          axios.get(
            `https://api.frankfurter.dev/v2/rate/${pair.base}/${pair.quote}`,
          ),
          axios.get(
            `https://api.frankfurter.dev/v2/rate/${pair.base}/${pair.quote}?date=${yesterdayDate}`,
          ),
        ]);

        const rate = today.data.rate;
        const oldRate = yesterday.data.rate;

        updated[pair.quote] = {
          rate,
          change: ((rate - oldRate) / oldRate) * 100,
        };
      }),
    );

    setCurrencyRate(updated);
  }

  useEffect(() => {
    if (currencyPairs.length === 0) return;

    updateCurrencyRates();
  }, [currencyPairs]);


  const mapCurrencyPairs = currencyPairs.map((currencyPair) => ({
    ...currencyPair,
    ...currencyRate[currencyPair.quote],
  }));


  return (
    <div className="flex w-full">
      <div className="px-[8px] py-[12px] md:px-[16px] bg-[#CEF739] flex gap-2 items-center">
        <span>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
              fill="#0A0A0A"
            />
          </svg>
        </span>
        <span className="text-[10px] md:text-xs text-[#0A0A0A]">
          LIVE MARKETS
        </span>
      </div>

      <div className="flex-1 bg-[#171719] overflow-x-auto text-center hide-scrollbar">
        {loading && <p className="text-white text-sm pt-2">Loading...</p>}

        {error && <p className="text-white text-sm">{error}</p>}

        {!loading && !error && (
          <div className="ticker-track flex">
            {mapCurrencyPairs.map((currencyPair) => (
              <CurrencyPair
                key={currencyPair.quote}
                currencyPair={currencyPair}
              />
            ))}

            {mapCurrencyPairs.map((currencyPair) => (
              <CurrencyPair
                key={`copy-${currencyPair.quote}`}
                currencyPair={currencyPair}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
