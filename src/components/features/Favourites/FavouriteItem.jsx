
import {TabItemContainer} from '../tabUi/TabItemContainer'
import { FavouriteButton } from "../tabUi/FavouriteButton";
import { ConversionPair } from "../tabUi/ConversionPair";
import { StarIcon } from "@phosphor-icons/react";


export function FavouriteItem () {
  return(
    <TabItemContainer>

      <ConversionPair/>

      <div className="flex flex-col gap-[6px] items-end">
        <h3 className="text-sm md:text-base text-white">0.8530</h3>
        <p className="text-[#42EB05] text-[10px]">▲ +0.16%</p>
      </div>

      <FavouriteButton icon={<StarIcon className="text-white w-[11px] h-[10px] md:w-[15px] md:h-[16px]"/>}/>

    </TabItemContainer>
  )
}