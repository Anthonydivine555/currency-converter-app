
export function Header() {
 return(
  <div className="w-full md:py-6 py-[16px]  fixed top-0 left-0 z-50 bg-[#000000]">
    <div className="max-w-w-7xl w-[95%] flex justify-between mx-auto items-center">
      <div className="flex items-center gap-2">
        <div className="w-[20px] h-[20px] md:h-[26px] md:w-[26px] text-black logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 26 26" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M24.0526 2.14544C22.7768 0.776634 20.9524 0 18.7718 0H7.22951C5.04345 0 3.21839 0.776346 1.94329 2.1457C0.673399 3.50955 0 5.40597 0 7.56241V18.4376C0 20.5941 0.673401 22.4904 1.94343 23.8543C3.2188 25.2237 5.04414 26 7.23087 26H18.7718C20.958 26 22.7827 25.2237 24.0574 23.8542C25.327 22.4904 26 20.5939 26 18.4376V7.56241C26 5.40522 25.3235 3.50892 24.0526 2.14544ZM8.68646 9.01932C8.34354 8.56797 8.43139 7.92413 8.88269 7.58123C9.33414 7.23833 9.97798 7.32625 10.3209 7.77759L17.3136 16.9818C17.6564 17.4331 17.5685 18.077 17.1172 18.4199C16.6658 18.7628 16.022 18.6748 15.6791 18.2235L8.68646 9.01932Z" fill="#CEF739"/></svg>
        </div>
        <span className="text-xs md:text-base font-bold text-white">FX_CHECKER</span>
      </div>
      <div className="text-[10px] md:text-sm text-[#9D9D9D]">55 CURRENCIES · EOD · ECB DATA</div>
    </div>
  </div>
 )
}