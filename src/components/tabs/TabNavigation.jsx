import {LogTab} from '../features/Log/LogTab'
import {HistoryTab} from '../features/History/HistoryTab'
import {FavouriteTab} from '../features/Favourites/FavouriteTab'
import {CompareTab} from '../features/Compare/CompareTab'


export function TabNavigation() {
  return(
    <>
    <div><LogTab/></div>
    <div><HistoryTab/></div>
    <div><FavouriteTab/></div>
    <div><CompareTab/></div>
    </>
  )
}