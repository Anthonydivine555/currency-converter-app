

export function ConvertInput({
  color,
  onChange,
  value,
  readOnly
}) {
  return (
    <input
      type="text"
      className=" focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-2 
        focus-visible:ring-offset-[#0A0A0A] text-[25px] md:text-[40px] px-2 flex-1 min-w-0 outline-0 hide-scrollbar rounded-lg"
      value={value}
      onChange={onChange}
      style={{ color: color }}
      readOnly={readOnly}
    />
  );
}
