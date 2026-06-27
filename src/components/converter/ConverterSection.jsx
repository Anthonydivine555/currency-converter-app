import { Button } from "./Button";
import { CurrencySelection } from "./CurrencySelection";
import { useState, useEffect } from "react";
import {ActiveFavouriteBtn} from '../../utils/ActiveFavouriteBtn'
import axios from "axios";

export function ConverterSection({fromCurrency, toCurrency, rate, handleToggleFavorite, favorites, setFavorites, setFromCurrency, setToCurrency, setRate}) {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");
  
  const isFavorite = ActiveFavouriteBtn(favorites, fromCurrency, toCurrency)
  
  const convertCurrency = async () => {
     try {
    const response = await axios.get(
      `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`
    );

    const exchangeRate = response.data.rate;

    setRate(exchangeRate)

    setConvertedAmount((amount * exchangeRate).toFixed(2));
  } catch (error) {
    console.error(error);
  }     
  };

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  function handleSwaping() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convertCurrency()
  }

  return (
    <div className="converter-wrapper flex flex-col gap-[16px] w-full mb-10">
      <h1 className="text-lg md:text-xl mb-4 text-white">CHECK THE RATE</h1>
      <div className="block bg-[#171719] rounded-[20px]">
        <div className="w-full top-container p-[20px] flex gap-[24px] items-center justify-between box-border flex-col md:flex-row">
          <CurrencySelection
            color="white"
            heading="SEND"
            selectedCurrency={fromCurrency}
            setSelectedCurrency={setFromCurrency}
            conversionInput={amount}
            setConversionInput={setAmount}
            readOnly={false}
          />

          <div
            className="w-[48px] h-[48px] flex justify-center items-center bg-[#202022] rounded-[8px] cursor-pointer shrink-0 border border-[#3D3D3D]"
            onClick={handleSwaping}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 4.75L14.75 0.75L18.75 4.75M14.75 0.75L14.75 16.75M8.75 12.75L4.75 16.75L0.749999 12.75M4.75 16.75L4.75 0.749999"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <CurrencySelection
            color="#CEF739"
            heading="RECEIVE"
            selectedCurrency={toCurrency}
            setSelectedCurrency={setToCurrency}
            conversionInput={convertedAmount}
            setConversionInput={setConvertedAmount}
            readOnly={true}
          />
        </div>
        <div className="px-[20px] py-[16px] flex flex-col md:flex-row gap-3 md:justify-between justify-center items-center border-dashed border-t border-[#2E2E2E]">
          <p className="text-[12px] text-white">1 {fromCurrency} = {rate?.toLocaleString()} {toCurrency}</p>
          <div className="gap-[12px] flex items-center">
            <Button
              icon={
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.59811 0.413133C5.87936 -0.149367 6.67623 -0.12593 6.93404 0.413133L8.48092 3.53032L11.9028 4.02251C12.5122 4.11626 12.7465 4.86626 12.3012 5.31157L9.84029 7.72563L10.4262 11.1241C10.52 11.7334 9.86373 12.2022 9.32467 11.9209L6.27779 10.3038L3.20748 11.9209C2.66842 12.2022 2.01217 11.7334 2.10592 11.1241L2.69186 7.72563L0.230918 5.31157C-0.214394 4.86626 0.0199805 4.11626 0.629356 4.02251L4.07467 3.53032L5.59811 0.413133Z"
                    fill="currentColor"
                  />
                </svg>
              }
              text="FAVORITED"
              variant="primary"
              onClick={() => handleToggleFavorite(fromCurrency, toCurrency)}
              isFavorite={isFavorite}
            />
            <Button text="LOG CONVERSION" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
