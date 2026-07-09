

export function EmptyState({header, message}) {
  return(
    <div className="flex justify-center items-center w-full py-[40px]">
      <div className="flex flex-col gap-[16px] text-center text-[#C6C6C6]">
        <h1 className="text-lg md:text-xl">
          {header}
        </h1>
        <p className="text-xs md:text-sm">{message}</p>
      </div>
    </div>
  )
}