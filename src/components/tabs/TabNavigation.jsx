import {LogTab} from '../features/Log/LogTab'
import {HistoryTab} from '../features/History/HistoryTab'
import {FavouriteTab} from '../features/Favourites/FavouriteTab'
import {CompareTab} from '../features/Compare/CompareTab'
import {TabHeader} from './TabHeader'
import { useState } from "react";


export function TabNavigation({favorites, favoriteRates, handleToggleFavorite}) {
  const [activeTab, setActiveTab] = useState("HISTORY");
  return(
    <div className='flex w-full flex-col gap-[20px]'>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} favorites={favorites}/>
      {activeTab === "HISTORY" && <HistoryTab/>}
      {activeTab === "FAVOURITE" && <FavouriteTab favorites={favorites} favoriteRates={favoriteRates} handleToggleFavorite={handleToggleFavorite}/>}
      {activeTab === "COMPARE" && <CompareTab/>}
      {activeTab === "LOG" && <LogTab/>}
    </div>
  )
}