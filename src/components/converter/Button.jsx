export function Button({ icon, text, variant, onClick, isFavorite, isLogged }) {
  const base =
    "rounded-lg flex gap-2 w-[132px] h-[32px] justify-center items-center transition-all duration-300 ease border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] active:scale-95";

  const variants = {
    primary:
      "bg-[#202022] border-[#454547] text-[#9D9D9D] hover:bg-[#CEF739] hover:text-black hover:border-[#CEF739]",
    secondary:
      "bg-[#202022] border-[#454547] text-[#9D9D9D] hover:bg-[#283300] hover:text-white hover:border-[#CEF739]",
  };

  const favoriteStyles = isFavorite
    ? "bg-[#CEF739] text-black"
    : "";

  const loggedStyles = isLogged ? "bg-[#CEF739] text-black" : "";

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${favoriteStyles} ${loggedStyles}`}
      onClick={onClick}
    >
      <span className="shrink-0">{icon}</span>

      <span className={`font-medium text-xs`}>{text}</span>
    </button>
  );
}
