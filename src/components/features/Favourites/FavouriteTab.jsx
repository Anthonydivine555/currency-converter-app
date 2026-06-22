import {TabContainer} from '../tabUi/TabContainer'
import { FavouriteItem } from "./FavouriteItem.jsx";

export function FavouriteTab() {
  return(
    <TabContainer>
      <div className="flex justify-between items-center flex-wrap">
        <h3 className="text-white text-sm md:text-base font-meduim">
          PINNED PAIRS
        </h3>
        <div className="text-[10px] text-xs text-[#9D9D9D]">10 FAVORITES</div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
      </div>
    </TabContainer>
  )
}