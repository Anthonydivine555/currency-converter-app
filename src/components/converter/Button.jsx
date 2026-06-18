

export function Button({icon, text, variant}) {
  
  const variants = {

    primary:
      "bg-[#CEF739] hover:bg-transparent border hover:text-white hover:border-[#CEF739] text-black transform hover:opacity-90 active:scale-95",

    secondary:
      "bg-transparent text-white border border-[#CEF739] hover:bg-[#CEF739] hover:text-black transform active:scale-95",
  };

  return (
    <button
      type="submit"
      className={`rounded-[8px] flex gap-2 px-[12px] py-[8px] transition-all duration-300 ease ${variants[variant]} group`}
    >
      {icon && (
        <span className="shrink-0 group-hover:text-white">{icon}</span>
      )}
      

      <span className={`font-medium text-xs text-$`}>{text}</span>
    </button>
  );
}
