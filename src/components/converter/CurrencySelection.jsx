// import { ConvertInput } from "./ConvertInput";
import { useState, useEffect, useRef } from "react";
import { CurrencyPicker } from "./CurrencyPicker";
import { ConvertInput } from "./ConvertInput";
import { NumericFormat } from "react-number-format";
// import { Divide } from "@phosphor-icons/react";
// import CurrencyInput from "react-currency-input-field";

export function CurrencySelection({
  color,
  heading,
  selectedCurrency,
  setSelectedCurrency,
  conversionInput,
  setConversionInput,
  readOnly,
  handleSwaping,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement.tagName;

      // ignore typing
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const key = e.key.toLowerCase();

      if (e.altKey && readOnly === true && key === "t") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.altKey && readOnly === false && key === "f") {
        e.preventDefault();
        setIsOpen(true);
      }

      if (e.ctrlKey && e.shiftKey && key === "s") {
        e.preventDefault();
        handleSwaping();
      }

      if (key === "escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedFlag = selectedCurrency.slice(0, 2).toLowerCase();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

   

  return (
    <div
      className="p-[20px] bg-[#202022] rounded-2xl flex flex-col gap-[20px] w-full md:w-[40%] border border-[#2E2E2E] max-sm:relative"
      ref={dropdownRef}
    >
      <h1 className="text-[#C6C6C6] text-xs md:text-xs">{heading}</h1>
      <div className="flex gap-3 items-center">
        <NumericFormat
          customInput={ConvertInput}
          value={conversionInput}
          thousandSeparator
          onValueChange={(values) => {
            setConversionInput(values.floatValue ?? 0);
          }}
          color={color}
          readOnly={readOnly}
        />

        <div className="bg-[#2E2E2E] border border-[#3D3D3D] sm:relative rounded-lg">
          <button
            className="flex gap-[8px] items-center p-[10px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-2  cursor-pointer 
            focus-visible:ring-offset-[#0A0A0A] rounded-lg"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
          </button>
          {isOpen && (
            <div className="animate-fadeIn">
              <CurrencyPicker
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setSelectedCurrency={setSelectedCurrency}
                selectedCurrency={selectedCurrency}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
