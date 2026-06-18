import { CurrencyPair } from "./CurrencyPair"

export function LiveMarketTicker() {
  return (
    <div className="flex w-full">
      <div className="px-[8px] py-[12px] md:px-[16px] bg-[#CEF739] flex gap-2 items-center">
        <span>
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z" fill="#0A0A0A"/></svg>
        </span>
        <span className="text-[10px] md:text-xs text-[#0A0A0A]">LIVE MARKETS</span>
      </div>
      <div className="flex-1 bg-[#171719] flex overflow-x-hidden">
        <CurrencyPair/>
        <CurrencyPair/>
        <CurrencyPair/>
        <CurrencyPair/>
        <CurrencyPair/>
        <CurrencyPair/>
        <CurrencyPair/>
      </div>
    </div>
  )
}