import { TabItemContainer } from "../tabUi/TabItemContainer";
import { ConversionPair } from "../tabUi/ConversionPair";
import { TrashIcon } from "@phosphor-icons/react";
import { FavouriteButton } from "../tabUi/FavouriteButton";

export function LogItem() {
  return(
    <TabItemContainer>
      <span className="text-xs md:text-sm text-[#9D9D9D]">20M</span>
      <ConversionPair/>
      <div className="flex gap-[20px]">
        <span className="text-[#C6C6C6] text-sm md:text-base">1,000.00</span>
        <span className="text-[#CEF739] text-sm md:text-base">853.02</span>
      </div>
      <FavouriteButton icon={<TrashIcon className="w-[11px] h-[10px] md:w-[15px] md:h-[16px]" color='white' />}/>
    </TabItemContainer>
  )
}