
import {TabItemContainer} from '../tabUi/TabItemContainer'
import { ConversionPair } from "../tabUi/ConversionPair";
import { StarIcon } from "@phosphor-icons/react";



export function FavouriteItem ({favorite, isFavorite, handleToggleFavorite}) {

  const formattedChange =
  favorite.change !== undefined
    ? favorite.change.toFixed(2)
    : "0.00";

  return(
    <TabItemContainer>

      <ConversionPair favorite={favorite} fromCurrency={favorite.fromCurrency} toCurrency={favorite.toCurrency} />


      <div className="flex flex-col gap-[6px] items-end">
        <h3 className="text-sm md:text-base text-white">{favorite.rate}</h3>
        <p className={`text-[#42EB05] text-[10px]
          ${formattedChange > 0 ? 
             'text-green-500'
            : formattedChange < 0 ?
              'text-red-500'
            :  'text-gray-500'
          }
          `}>{formattedChange > 0 ? "▲" : formattedChange < 0 ? "▼" : "" } {''} {formattedChange}</p>
      </div>
      
      <button className={`w-[32px] h-[32px] border ${isFavorite ? "border-[#CEF739]": "border-[#2E2E2E]"} bg-[#202022] flex justify-center items-center rounded-lg cursor-pointer`}>
        <StarIcon weight="fill" className={`w-[11px] h-[10px] md:w-[15px] md:h-[16px] ${isFavorite ? "text-[#CEF739]": ""}`}
        onClick= {() => handleToggleFavorite(favorite.fromCurrency, favorite.toCurrency)} />
      </button>

    </TabItemContainer>
  )
}