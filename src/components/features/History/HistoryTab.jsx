import axios from "axios";
import { useState, useEffect } from "react";
import { ConversionStats } from "./ConversionStats";
import { ChartContainer } from "./ChartContainer";
import { PeriodStats } from "./PeriodStats";
import { getHistoryDateRange } from "../../../utils/getHistoryDateRange";

export function HistoryTab({ fromCurrency, toCurrency }) {
  const [historyData, setHistoryData] = useState([]);
  const [period, setPeriod] = useState("1M");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    if (!fromCurrency || !toCurrency) return;

    async function fetchHistoryData() {
      setLoading(true);

      setError(null);

      const { from, to } = getHistoryDateRange(period);

      try {
        const response = await axios.get(
          "https://api.frankfurter.dev/v2/rates",
          {
            params: {
              base: fromCurrency,
              quotes: toCurrency,
              from,
              to,
            },
          },
        );


        setHistoryData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch history data.");
      } finally {
        setLoading(false);
      }
    }

    fetchHistoryData();
  }, [fromCurrency, toCurrency, period]);

  useEffect(() => {
  const handleKeyDown = (e) => {
    const tag = document.activeElement.tagName;

    // ignore typing
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    const key = e.key.toLowerCase();

    if (e.altKey && key === "1") setPeriod("1D");
    if (e.altKey && key === "2") setPeriod("1W");
    if (e.altKey && key === "3") setPeriod("1M");
    if (e.altKey && key === "4") setPeriod("3M");
    if (e.altKey && key === "5") setPeriod("1Y");
    if (e.altKey && key === "6") setPeriod("5Y");
  
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

  if (loading) {
    return <p className="text-center p-20 text-sm text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center p-20 text-sm text-white">{error}</p>;
  }

  if (historyData.length === 0) {
    return null;
  }

  const open = historyData[0].rate;
  const last = historyData[historyData.length - 1].rate;
  const change = last - open;
  const changePercentage = (change / open) * 100;

  const isPositive = change > 0;
  const isNegative = change < 0;

  const trendColor = isPositive
    ? "text-[#42EB05]"
    : isNegative
      ? "text-[#EF4444]"
      : "text-[#C6C6C6]";

  const changeValue = `${isPositive ? "+" : ""}${change.toFixed(4)}`;

  const changePercentValue = `${isPositive ? "▲ +" : isNegative ? "▼" : ""}${changePercentage.toFixed(2)}%`;

  const historyCards = [
    {
      title: "Open",
      value: open.toFixed(4),
      color: "text-white",
    },
    {
      title: "Last",
      value: last.toFixed(4),
      color: "text-white",
    },
    {
      title: "Change",
      value: changeValue,
      color: trendColor,
    },
    {
      title: "Change %",
      value: changePercentValue,
      color: trendColor,
    },
  ];

  return (
    <div className=" flex flex-col gap-[20px] w-full">
      <div className="flex gap-[10px] w-full items-center justify-between flex-wrap">
        <div className="grid grid-cols-2 md:grid-cols-[repeat(4,max-content)] gap-[16px] max-w-2xl w-full">
          {historyCards.map((card) => (
            <ConversionStats
              key={card.title}
              title={card.title}
              value={card.value}
              color={card.color}
            />
          ))}
        </div>
        <PeriodStats period={period} setPeriod={setPeriod} />
      </div>
      <ChartContainer period={period} fromCurrency={fromCurrency} toCurrency={toCurrency}  historyData={historyData} tabIndex={-1} />
    </div>
  );
}
