import {LogTab} from '../features/Log/LogTab'
import {HistoryTab} from '../features/History/HistoryTab'
import {FavouriteTab} from '../features/Favourites/FavouriteTab'
import {CompareTab} from '../features/Compare/CompareTab'
import {TabHeader} from './TabHeader'
import { useState } from "react";


export function TabNavigation() {
  const [activeTab, setActiveTab] = useState("HISTORY")
  return(
    <div className='flex w-full flex-col gap-[20px]'>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HistoryTab/>
    </div>
  )
}