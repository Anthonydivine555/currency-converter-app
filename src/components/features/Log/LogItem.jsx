import { TabItemContainer } from "../tabUi/TabItemContainer";
import { ConversionPair } from "../tabUi/ConversionPair";
import { TrashIcon } from "@phosphor-icons/react";
import { getTimeAgo } from "../../../utils/getTimeAgo";

export function LogItem({ log, handleDeleteLog }) {
  const timeInterval = getTimeAgo(log.timestamp);

  return (
    <TabItemContainer>
      <div className="flex-1 flex gap-[8px] max-sm:flex-col">
        <span className="text-xs md:text-sm text-[#9D9D9D]">
          {timeInterval}
        </span>
        <ConversionPair
          fromCurrency={log.fromCurrency}
          toCurrency={log.toCurrency}
        />
      </div>
      <div className="flex gap-[8px] max-sm:flex-col">
        <span className="text-[#C6C6C6] text-sm md:text-base">
          {log.fromAmount}
        </span>
        <span className="text-[#CEF739] text-sm md:text-base">
          {log.toAmount}
        </span>
      </div>
      <button
        className="w-[32px] h-[32px] border border-[#2E2E2E] bg-[#202022] flex justify-center items-center rounded-lg"
        onClick={() => handleDeleteLog(log.id)}
      >
        <TrashIcon
          className="w-[11px] h-[10px] md:w-[15px] md:h-[16px]"
          color="white"
        />
      </button>
    </TabItemContainer>
  );
}
