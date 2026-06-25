

function EmptyState() {
  return(
    <div className="flex justify-center items-center w-full py-[40px]">
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-lg md:text-xl text-white">
          No pinned pairs yet
        </h1>
        <p className="text-xs md:text-sm">Pin a pair to track its rate here. Tap the star icon on any conversion or comparison row.</p>
      </div>
    </div>
  )
}