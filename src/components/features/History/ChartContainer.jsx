import {HistoryChart} from './HistoryChart'

export function ChartContainer({period}) {
  return(
    <div className="md:p-[20px] px-[12px] py-[16px] flex flex-col gap-[20px] w-full chart-container bg-[#171719] rounded-2xl border border-[#202022]">
      <div className="flex justify-between items-center">
        <h3 className="md:text-base text-sm text-white">USD/EUR</h3>
        <p className="text-[#9D9D9D] md:text-xs text-[10px]">0.8530 · MAY 14 16:00 CET</p>
      </div>
      <HistoryChart period={period}/>
    </div>
  );
}