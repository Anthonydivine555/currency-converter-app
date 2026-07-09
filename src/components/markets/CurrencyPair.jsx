

export function CurrencyPair({currencyPair}) {


  const formattedChange =
  currencyPair.change !== undefined
    ? currencyPair.change.toFixed(2)
    : "0.00";

  return (
    <div className="px-[20px] md:px-[12px] py-[12px] space-x-2 border-r border-[#2E2E2E] shrink-0">
      <span className="text-[#9D9D9D] text-[10px] md:text-xs">{currencyPair.base}/{currencyPair.quote}</span>
      <span className="text-white text-[10px] md:text-xs">{currencyPair.rate}</span>
      <span className={`text-[#42EB05] text-[10px] md:text-xs
          ${formattedChange > 0 ? 
              'text-green-500'
            : formattedChange < 0 ?
              'text-red-500'
            :  'text-gray-500'
          }
        `}>{`${formattedChange > 0 ? "▲" : formattedChange < 0 ? "▼" : "" }${''}${formattedChange}%`}</span>
    </div>
  );
}
