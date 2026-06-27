import {Header} from './Header'
import {LiveMarketTicker} from '../markets/LiveMarketTicker'
import {ConverterSection} from '../converter/ConverterSection'
import {TabNavigation} from '../tabs/TabNavigation'
import {useState, useEffect} from 'react'
import {handleToggleFavorite} from '../../utils/handleToggleFavorite'
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

  const favoriteList = favorites.map((favorite) => ({
    ...favorite,
    ...favoriteRates[favorite.id],
  }));

  console.log(favoriteList)


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
        ...prevFavorites,
        {
          id,
          fromCurrency: from,
          toCurrency: to
        },
      ];
    });
    
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


  return (
    <div className='min-h-screen'>
      <Header/>
      <LiveMarketTicker />
      <main className='max-w-5xl w-[95%] mx-auto py-[48px]'>
        <ConverterSection favorites={favorites} handleToggleFavorite={handleToggleFavorite} setFavorites={setFavorites} fromCurrency={fromCurrency} toCurrency={toCurrency} rate={rate} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency} setRate={setRate}/>
        <TabNavigation favorites={favorites} favoriteRates={favoriteRates} handleToggleFavorite={handleToggleFavorite}/>
      </main>
    </div>
  )
}

