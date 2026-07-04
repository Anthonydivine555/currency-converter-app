import { LogTab } from "../features/Log/LogTab";
import { HistoryTab } from "../features/History/HistoryTab";
import { FavouriteTab } from "../features/Favourites/FavouriteTab";
import { CompareTab } from "../features/Compare/CompareTab";
import { TabHeader } from "./TabHeader";
import { useState, useEffect } from "react";
import axios from "axios";

export function TabNavigation({
  favorites,
  favoriteRates,
  handleToggleFavorite,
  logs,
  setLogs,
  amount,
  fromCurrency,
  toCurrency
}) {
  const [activeTab, setActiveTab] = useState("HISTORY");
  const [compareData, setCompareData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchCompareData() {

      setLoading(true);

      setError(null);

      try {
        const response = await axios.get(
          `https://api.frankfurter.dev/v2/rates?base=${fromCurrency}&quotes=EUR,GBP,JPY,CHF,CAD,AUD,INR,CNY,BDT`,
        );

        setCompareData(response.data);


      } catch (err) {
        console.error(err);
        setError("Failed to fetch comparison data.");
      } finally {
        setLoading(false);
      }
    }

    fetchCompareData()


  }, [fromCurrency]);

  return (
    <div className="flex w-full flex-col gap-[20px]">
      <TabHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favorites={favorites}
        logs={logs}
      />

      {activeTab === "HISTORY" && <HistoryTab toCurrency={toCurrency} fromCurrency={fromCurrency}/>}

      {activeTab === "FAVOURITE" && (
        <FavouriteTab
          favorites={favorites}
          favoriteRates={favoriteRates}
          handleToggleFavorite={handleToggleFavorite}
        />
      )}

      {activeTab === "COMPARE" && (
        <CompareTab
          compareData={compareData}
          loading={loading}
          error={error}
          handleToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          amount={amount}
          fromCurrency={fromCurrency}
        />
      )}

      {activeTab === "LOG" && <LogTab logs={logs} setLogs={setLogs} />}
    </div>
  );
}
