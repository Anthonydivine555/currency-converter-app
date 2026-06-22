
import { TabItemContainer } from "../tabUi/TabItemContainer";



export function CompareItem() {
  return(
    <TabItemContainer>
      <div className="country-image w-[24px] h-[24px] ">
        <img src="\flags\gb.webp" alt="" className="w-full h-full object-fit"/>
      </div>
      <div className="flex-1 flex gap-[6px] flex-col">
        <h3 className="text-xs md:text-sm text-white">GBP</h3>
        <p className="text-[10px] md:text-xs text-[#9D9D9D]">British Pound</p>
      </div>
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-xs md:text-sm text-white">736.65</h3>
        <p className="text-[10px] text-[#9D9D9D]">@ 0.7366</p>
      </div>
       
    </TabItemContainer>
  )
}