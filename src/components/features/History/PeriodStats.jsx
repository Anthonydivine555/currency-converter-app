

function Period({ text, active, onClick }) {
  return (
    <button
      className={`px-[16px] py-[12px] rounded-[8px] text-[10px] text-xs ${active ? "bg-[#2E2E2E] text-white" : "text-[#9D9D9D]"} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export function PeriodStats({period, setPeriod}) {

  return (
    <div className="overflow-x-hidden rounded-xl bg-[#171719]">
      <Period
        text="1D"
        active={period === "1D"}
        onClick={() => {
          setPeriod("1D");
        }}
      />
      <Period
        text="1W"
        active={period === "1W"}
        onClick={() => {
          setPeriod("1W");
        }}
      />
      <Period
        text="1M"
        active={period === "1M"}
        onClick={() => {
          setPeriod("1M");
        }}
      />
      <Period
        text="3M"
        active={period === "3M"}
        onClick={() => {
          setPeriod("3M");
        }}
      />
      <Period
        text="1Y"
        active={period === "1Y"}
        onClick={() => {
          setPeriod("1Y");
        }}
      />
      <Period
        text="5Y"
        active={period === "5Y"}
        onClick={() => {
          setPeriod("5Y");
        }}
      />
    </div>
  );
}
