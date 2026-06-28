

export function Button({icon, text, variant, onClick, isFavorite}) {
  
  const variants = {
  primary: `bg-[#202022] border-[#454547] hover:border-[#CEF739] hover:text-black text-[#9D9D9D] hover:bg-[#CEF739] transform hover:opacity-90 active:scale-95 ${
    isFavorite ? "text-black bg-[#CEF739] border-[#CEF739]" : ""
  }`,

  secondary:
    "bg-[#202022] text-[#9D9D9D] hover:border-[#CEF739] hover:text-white border-[#454547] hover:bg-[#283300] hover:text-black transform active:scale-95",
};
  return (
    <button
      type="submit"
      className={`rounded-[8px] flex gap-2 px-[12px] py-[8px] transition-all duration-300 ease border cursor-pointer ${variants[variant]}`}
      onClick={onClick}
    >
      {icon && (
        <span className="shrink-0">{icon}</span>
      )}
      

      <span className={`font-medium text-xs`}>{text}</span>
    </button>
  );
}
