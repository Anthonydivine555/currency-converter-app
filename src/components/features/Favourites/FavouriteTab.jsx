import {TabContainer} from '../tabUi/TabContainer'
import { FavouriteItem } from "./FavouriteItem.jsx";
import {ActiveFavouriteBtn} from '../../../utils/ActiveFavouriteBtn'
import {EmptyState} from '../tabUi/EmptyState'

export function FavouriteTab({favorites, favoriteRates, handleToggleFavorite, setFavorites}) {

  const favoriteList = favorites.map((favorite) => ({
    ...favorite,
    ...favoriteRates[favorite.id],
  }));


  return(
    favoriteList.length === 0 ? (
      <EmptyState
       header='No pinned pairs yet' 
       message='Pin a pair to track its rate here. Tap the star icon on any conversion or comparison row..'
       /> 
    ) : (
      <TabContainer>
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="text-white text-sm md:text-base font-meduim">
            PINNED PAIRS
          </h3>
          <div className="text-[10px] text-xs text-[#9D9D9D]">{favorites.length} FAVORITES</div>
        </div>
        <div className="flex flex-col gap-[12px]">
          {favoriteList.map((favorite) => {
  
            const isFavorite = ActiveFavouriteBtn(favorites, favorite.fromCurrency, favorite.toCurrency)
  
            return(
              <FavouriteItem favorite={favorite} isFavorite={isFavorite} handleToggleFavorite={handleToggleFavorite} key={favorite.id} setFavorites={setFavorites}/>
            )
          })}
          
        </div>
      </TabContainer>
    )
  
  )
}