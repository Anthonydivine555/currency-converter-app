// import { ConvertInput } from "./ConvertInput";
import { useState } from "react";
import { CurrencyPicker } from "./CurrencyPicker";
import { ConvertInput } from "./ConvertInput";
// import CurrencyInput from "react-currency-input-field";

export function CurrencySelection({
  color,
  heading,
  selectedCurrency,
  setSelectedCurrency,
  conversionInput,
  setConversionInput,
  readOnly,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedFlag = selectedCurrency.slice(0, 2).toLowerCase();

  return (
    <div className="p-[20px] bg-[#202022] rounded-2xl flex flex-col gap-[20px] w-full md:w-[40%] border border-[#2E2E2E] max-sm:relative">
      <h1 className="text-[#C6C6C6] text-xs md:text-xs">{heading}</h1>
      <div className="flex gap-3 items-center">
        <ConvertInput
          value={conversionInput}
          onChange={(event) => 
            setConversionInput(event.target.value)
          }
          color={color}
          readOnly={readOnly}
          conversionInput={conversionInput}
        />

        <div className="bg-[#2E2E2E] border border-[#3D3D3D] rounded-lg sm:relative cursor-pointer">
          <div
            className="flex gap-[8px] items-center p-[10px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-[20px] h-[20px] rounded-full overflow-hidden">
              <img
                src={`https://flagcdn.com/w40/${selectedFlag}.png`}
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            <span className="text-xs md:text-sm text-white">
              {selectedCurrency}
            </span>

            <svg
              width="7"
              height="4"
              viewBox="0 0 7 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.472271 0H6.49571C6.91758 0 7.12852 0.515625 6.82383 0.820312L3.82383 3.82031C3.63633 4.00781 3.33165 4.00781 3.14415 3.82031L0.144146 0.820312C-0.160541 0.515625 0.0503963 0 0.472271 0Z"
                fill="white"
              />
            </svg>
          </div>
          <CurrencyPicker
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedCurrency={setSelectedCurrency}
            selectedCurrency={selectedCurrency}
          />
        </div>
      </div>
    </div>
  );
}
