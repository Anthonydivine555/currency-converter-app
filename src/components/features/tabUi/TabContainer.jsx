
export function TabContainer({ children }) {
  return (
    <div className=" flex flex-col gap-[20px] w-full md:p-[20px] p-[16px] bg-[#171719] border border-[#202022] rounded-2xl">
      {children}
    </div>
  );
}
