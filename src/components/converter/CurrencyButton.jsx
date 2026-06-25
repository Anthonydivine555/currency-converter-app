import { CheckIcon } from "@phosphor-icons/react";


export function CurrencyButton({currency, flagCode, setSelectedCurrency, setIsOpen, selectedCurrency, setCurrencySearch}) {

  function handleButtonClick(currency) {
    setSelectedCurrency(currency.iso_code)
    setIsOpen(false)
  }

  return (
    <button
      className="px-[8px] py-[12px] flex gap-[12px] items-center w-full"
      onClick={() => {
        handleButtonClick(currency)
        setCurrencySearch('')
      }}
    >
      <div className="currency-flag w-[20px] h-[20px] rounded-full overflow-hidden">
        <img
          src={`https://flagcdn.com/w40/${flagCode}.png`}
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      <span className="text-xs md:text-sm text-white">{currency.iso_code}</span>
      <span className="text-xs md:text-sm text-[#9D9D9D] flex-1 text-left">
        {currency.name}
      </span>
      {selectedCurrency === currency.iso_code && (
        <CheckIcon size={12} color="white" />
      )}
    </button>
  );
}
