import {LogTab} from '../features/Log/LogTab'
import {HistoryTab} from '../features/History/HistoryTab'
import {FavouriteTab} from '../features/Favourites/FavouriteTab'
import {CompareTab} from '../features/Compare/CompareTab'
import {TabHeader} from './TabHeader'
import { useState } from "react";


export function TabNavigation() {
  const [activeTab, setActiveTab] = useState("HISTORY");
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className='flex w-full flex-col gap-[20px]'>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isOpen} setIsOpen={setIsOpen} />
      {activeTab === "HISTORY" && <HistoryTab/>}
      {activeTab === "FAVOURITE" && <FavouriteTab/>}
      {activeTab === "COMPARE" && <CompareTab/>}
      {activeTab === "LOG" && <LogTab/>}
    </div>
  )
}