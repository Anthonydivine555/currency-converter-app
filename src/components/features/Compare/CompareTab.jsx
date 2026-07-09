
import {CompareItem} from './CompareItem'
import { TabContainer } from "../tabUi/TabContainer";
import {compareCurrencies} from '../../data/compareCurrency'
import {EmptyState} from '../tabUi/EmptyState'


export function CompareTab({compareData, loading, error, handleToggleFavorite, favorites, amount, fromCurrency}) {

  if (!amount) {
    return (
      <EmptyState  header='No comparison avaliable' 
       message='Enter an amount in send above to see what your money is worth in other currencies.'/>
    );
  }
  
  if (loading) {
    return <p className='text-center p-20'>Loading...</p>
  }

  if (error) {
    return <p className='text-center p-20'>{error}</p>
  }


const renderCompareCurrencies = compareCurrencies.map((currency) => {
  // Base currency
  if (currency.code === fromCurrency) {
    return {
      ...currency,
      base: fromCurrency,
      quote: fromCurrency,
      rate: 1,
    };
  }

  const currencyRate = compareData.find(
    (item) => item.quote === currency.code
  );

  if (!currencyRate) return null;

  return {
    ...currency,
    ...currencyRate,
  };
}).filter(Boolean);



 return(
  <TabContainer>
    <div className="flex justify-between gap-[10px] items-center flex-wrap">
      <div className='space-x-2' >
        <span className='text-xs md:text-sm text-[#9D9D9D]'>MULTI-CURRENCY</span>
        <span className="text-white text-sm md:text-base">{amount} FROM {fromCurrency}</span>
      </div>
      <div className="text-[10px] md:text-xs text-[#9D9D9D]">{compareData.length} PAIRS</div>
    </div>
    <div className="flex flex-col gap-[12px]">
      {renderCompareCurrencies.map((currency) => 
  
        <CompareItem key={currency.code} currency={currency} handleToggleFavorite={handleToggleFavorite} favorites={favorites} amount={amount}/>
      )}
    </div>
  </TabContainer>
 )
}