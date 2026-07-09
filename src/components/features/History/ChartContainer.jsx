import { HistoryChart } from "./HistoryChart";
import {formatChartDate} from '../../../utils/formatChartDate'

export function ChartContainer({
  period,
  fromCurrency,
  toCurrency,
  historyData,
  currentTime
}) {

  const latest = historyData[historyData.length - 1];

  return (
    <div className="flex flex-col gap-[20px] w-full chart-container bg-[#171719] rounded-2xl border border-[#202022]">
      <div className="flex justify-between items-center md:p-[20px] px-[12px] py-[16px]">
        <h3 className="md:text-base text-sm text-white">
          {fromCurrency}/{toCurrency}
        </h3>
        <p className="text-[#9D9D9D] md:text-xs text-[10px]">
          {latest.rate.toFixed(2)} · {formatChartDate(latest.date)} {currentTime}
        </p>
      </div>
      <HistoryChart period={period} historyData={historyData} />
    </div>
  );
}
