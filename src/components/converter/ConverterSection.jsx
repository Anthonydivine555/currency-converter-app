import { Button } from "./button";
import { CurrencySelection } from "./CurrencySelection";
import { useEffect, useState, useRef } from "react";
import { ActiveFavouriteBtn } from "../../utils/ActiveFavouriteBtn";
import { CheckIcon } from "@phosphor-icons/react";
import axios from "axios";

export function ConverterSection({
  fromCurrency,
  toCurrency,
  rate,
  handleToggleFavorite,
  favorites,
  setFromCurrency,
  setToCurrency,
  setRate,
  convertedAmount,
  setConvertedAmount,
  amount,
  setAmount,
  setLogs,
}) {
  const [isLogged, setIsLogged] = useState(false);

  const timeoutRef = useRef(null);

  const isFavorite = ActiveFavouriteBtn(favorites, fromCurrency, toCurrency);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`,
      );

      const exchangeRate = response.data.rate;

      setRate(exchangeRate);

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
  }

  function handleLogConversion() {
    const newLog = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      fromCurrency,
      toCurrency,
      fromAmount: amount,
      toAmount: convertedAmount,
      rate,
    };

    setLogs((prev) => [newLog, ...prev]);

    setIsLogged(true);

    clearTimeout(timeoutRef.current);

    // Start a new timeout
    timeoutRef.current = setTimeout(() => {
      setIsLogged(false);
    }, 2000);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement.tagName;

      // ignore typing
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.altKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleSwaping();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="converter-wrapper flex flex-col gap-[36px] w-full">
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
            handleSwaping={handleSwaping}
          />

          <button
            className="w-[48px] h-[48px] flex justify-center items-center bg-[#202022] rounded-[8px] cursor-pointer shrink-0 border border-[#3D3D3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-2 
            focus-visible:ring-offset-[#0A0A0A]"
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
          </button>
          <CurrencySelection
            color="#CEF739"
            heading="RECEIVE"
            selectedCurrency={toCurrency}
            setSelectedCurrency={setToCurrency}
            conversionInput={convertedAmount}
            setConversionInput={setConvertedAmount}
            readOnly={true}
            handleSwaping={handleSwaping}
          />
        </div>
        <div className="px-[20px] py-[16px] flex flex-col md:flex-row gap-3 md:justify-between justify-center items-center border-dashed border-t border-[#2E2E2E]">
          <p className="text-[12px] text-white">
            1 {fromCurrency} = {rate?.toLocaleString()} {toCurrency}
          </p>
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
            <Button
              text={isLogged ? "LOGGED" : "LOG CONVERSION"}
              variant="secondary"
              onClick={handleLogConversion}
              icon={isLogged ? <CheckIcon size={13} color="black" /> : null}
              isLogged={isLogged}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
