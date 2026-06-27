
export function ActiveFavouriteBtn (favorites, fromCurrency, toCurrency) {
  const isFavorite = favorites.some((favorite) => 
   favorite.id === `${fromCurrency}-${toCurrency}`
  )

  return isFavorite

}
