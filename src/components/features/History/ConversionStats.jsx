

export function ConversionStats ({ title, value, color }) {


  return(
    <div className={`px-[20px] py-[12px] flex flex-col gap-[16px] bg-[#171719] border border-[#202022] rounded-2xl `}>
      <h3 className="text-[#C6C6C6] text-sm">{title}</h3>
      <p className={`${color} text-lg`}>{value}</p>
    </div>
  )
}