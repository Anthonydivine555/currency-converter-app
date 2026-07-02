import { TabItemContainer } from "../tabUi/TabItemContainer";
import { StarIcon } from "@phosphor-icons/react";
import { ActiveFavouriteBtn } from "../../../utils/ActiveFavouriteBtn";

export function CompareItem({ currency, handleToggleFavorite, favorites, amount }) {
  
  const flagCode = currency.quote.slice(0, 2).toLowerCase();

  const thousands = (currency.rate * amount).toFixed(2);

  const isFavorite = ActiveFavouriteBtn(
    favorites,
    currency.base,
    currency.quote,
  );

  return (
    <TabItemContainer>
      <div className="country-image w-[24px] h-[24px] rounded-full overflow-hidden">
        <img
          src={`https://flagcdn.com/w40/${flagCode}.png`}
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      <div className="flex-1 flex gap-[6px] flex-col">
        <h3 className="text-xs md:text-sm text-white">{currency.code}</h3>
        <p className="text-[10px] md:text-xs text-[#9D9D9D]">{currency.name}</p>
      </div>
      <div className="flex flex-col gap-[6px] items-end">
        <h3 className="text-xs md:text-sm text-white">{thousands}</h3>
        <p className="text-[10px] text-[#9D9D9D]">@ {currency.rate}</p>
      </div>
      <button
        className={`w-[32px] h-[32px] border ${isFavorite ? "border-[#CEF739]" : "border-[#2E2E2E]"} bg-[#202022] flex justify-center items-center rounded-lg cursor-pointer`}
      >
        <StarIcon
          weight={isFavorite ? 'fill' : null}
          className={`w-[11px] h-[10px] md:w-[15px] md:h-[16px] ${isFavorite ? "text-[#CEF739]" : "text-white"}`}
          onClick={() => handleToggleFavorite(currency.base, currency.quote)}
        />
      </button>
    </TabItemContainer>
  );
}
