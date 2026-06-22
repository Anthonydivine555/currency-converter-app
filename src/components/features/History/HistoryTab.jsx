import {useState} from 'react'
import { ConversionStats } from "./ConversionStats";
import { ChartContainer } from "./ChartContainer";
import {PeriodStats} from './PeriodStats'


export function HistoryTab() {
  const [period, setPeriod] = useState("1M");
  
  return (
    <div className=" flex flex-col gap-[20px] w-full">
      <div className="flex gap-[10px] w-full items-center justify-between flex-wrap">
        <div className="grid grid-cols-2 md:grid-cols-[repeat(4,max-content)] gap-[16px] max-w-2xl w-full">
          <ConversionStats title="OPEN" value="0.8516" color="text-white" />
          <ConversionStats title="LAST" value="0.8530" color="text-white" />
          <ConversionStats title="CHANGE" value="0.0016" color="text-green-500" />
          <ConversionStats title="% CHANGE" value="▲ +0.16%" color="text-green-500" />
        </div>
        <PeriodStats period={period} setPeriod={setPeriod}/>
      </div>
      <ChartContainer period={period}/>
    </div>
  );
}
