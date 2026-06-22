import {TabContainer} from '../tabUi/TabContainer'
import { LogItem } from "./LogItem";

export function LogTab() {
  return (
    <TabContainer>
      <div className="flex justify-between items-center max-md:flex-col gap[10px]">
        <h3 className="text-white text-sm md:text-base font-meduim flex-1">
          CONVERSION LOG
        </h3>
        <div className="flex gap-[16px] items-center max-md:justify-between">
          <span className="text-[#9D9D9D] text-[10px] md:text-xs">8 LOGGED</span>
          <button className="px-[12px] p-[8px] bg-[#202022] border border-[#3D3D3D] text-[#9D9D9D] text-[10px] md:text-xs rounded-[10px]">
            CLEAR ALL
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <LogItem/>
        <LogItem/>
        <LogItem/>
        <LogItem/>
        <LogItem/>
        <LogItem/>
        <LogItem/>
        <LogItem/>
      </div>
    </TabContainer>
  );
}
