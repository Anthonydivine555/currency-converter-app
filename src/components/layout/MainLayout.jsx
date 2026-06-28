import {Header} from './Header'
import {LiveMarketTicker} from '../markets/LiveMarketTicker'
import {ConverterSection} from '../converter/ConverterSection'
import {TabNavigation} from '../tabs/TabNavigation'
import {useState, useEffect} from 'react'
import axios from 'axios'

export function MainLayout() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rate, setRate] = useState(null);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [favoriteRates, setFavoriteRates] = useState(() => {
    const savedRates = localStorage.getItem("favoriteRates");

    return savedRates ? JSON.parse(savedRates) : {};
  });

  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");

  const [logs, setLogs] = useState(() => {

    const savedlogs = localStorage.getItem("logs");

    return savedlogs ? JSON.parse(savedlogs) : [
      {
        id: "1",
        timestamp: Date.now(), 
        fromCurrency: "USD",
        toCurrency: "NGN",
        fromAmount: 100,
        toAmount: 154723.56,
        rate: 1547.2356
      },
      {
        id: "2",
        timestamp: Date.now(), 
        fromCurrency: "EUR",
        toCurrency: "GBP",
        fromAmount: 250,
        toAmount: 216.48,
        rate: 1547.2356
      }
    ]}
  );


  function getDateString(daysAgo = 0) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split("T")[0];
  }



  function handleToggleFavorite(from, to) {

    const id = `${from}-${to}`;

    setFavorites((prevFavorites) => {

      const exists = prevFavorites.some(
        (favorite) => favorite.id === id
      );

      if (exists) {
        return prevFavorites.filter(
          (favorite) => favorite.id !== id
        );
      }

      return [
        {
          id,
          fromCurrency: from,
          toCurrency: to
        },
        ...prevFavorites
      ];
    });    
  }

  function handleLogConversion() {
    const newLog = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      fromCurrency,
      toCurrency,
      fromAmount: amount,
      toAmount: convertedAmount,
      rate
    };

    setLogs((prev) => [newLog, ...prev]);
  }


async function refreshFavoriteRates() {

  const updated = {};

  for (const fav of favorites) {
    const today = await axios.get(
      `https://api.frankfurter.dev/v2/rate/${fav.fromCurrency}/${fav.toCurrency}`
    )

    const yesterdayDate = getDateString(1);

    const yesterday = await axios.get(
      `https://api.frankfurter.dev/v2/rate/${fav.fromCurrency}/${fav.toCurrency}?date=${yesterdayDate}`
    )

    const rate = today.data.rate;

    const oldRate = yesterday.data.rate;

    const change = ((rate - oldRate) / oldRate) * 100;
    

    updated[fav.id] = {
      rate,
      change
    };
  }

  setFavoriteRates(updated);
}

useEffect(() => {
  if (favorites.length === 0) return;

  refreshFavoriteRates();
}, [favorites]);


useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);


useEffect(() => {
  localStorage.setItem(
    "favoriteRates",
    JSON.stringify(favoriteRates)
  );
}, [favoriteRates]);


useEffect(() => {
  localStorage.setItem(
    "logs",
    JSON.stringify(logs)
  );
}, [logs]);


  return (
    <div className='min-h-screen'>
      <Header/>

      <LiveMarketTicker />

      <main className='max-w-5xl w-[95%] mx-auto py-[48px]'>

        <ConverterSection favorites={favorites} handleToggleFavorite={handleToggleFavorite} setFavorites={setFavorites} fromCurrency={fromCurrency} toCurrency={toCurrency} rate={rate} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency} setRate={setRate} amount={amount} setAmount={setAmount} convertedAmount={convertedAmount} setConvertedAmount={setConvertedAmount} handleLogConversion={handleLogConversion}/>

        <TabNavigation favorites={favorites} favoriteRates={favoriteRates} handleToggleFavorite={handleToggleFavorite} logs={logs} setLogs={setLogs}/>
      </main>
    </div>
  )
}

