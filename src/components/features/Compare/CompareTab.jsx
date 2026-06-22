
import {CompareItem} from './CompareItem'
import { TabContainer } from "../tabUi/TabContainer";

export function CompareTab() {
 return(
  <TabContainer>
    <div className="flex justify-between items-center flex-wrap">
      <div className='space-x-2' >
        <span className='text-xs md:text-sm text-[#9D9D9D]'>MULTI-CURRENCY</span>
        <span className="text-white text-sm md:text-base">1,000 FROM USD</span>
      </div>
      <div className="text-[10px] md:text-xs text-[#9D9D9D]">8 PAIRS</div>
    </div>
    <div className="flex flex-col gap-[12px]">
      <CompareItem/>
      <CompareItem/>
      <CompareItem/>
      <CompareItem/>
      <CompareItem/>
      <CompareItem/>
      <CompareItem/>
      <CompareItem/>
    </div>
  </TabContainer>
 )
}