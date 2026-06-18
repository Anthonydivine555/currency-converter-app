

export function ConvertInput ({color}) {
 return(
    <input type="number" className={`flex-1 text-${color} text-[32px] md:text-[40px]`} value="1000" />
  )
}