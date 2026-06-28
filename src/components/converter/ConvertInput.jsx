

export function ConvertInput({
  color,
  conversionInput,
  onChange,
  value,
  readOnly
}) {
  return (
    <input
      type="number"
      className={`text-[32px] md:text-[40px] flex-1 min-w-0 outline-0`}
      value={value}
      onChange={onChange}
      style={{ color: color }}
      readOnly={readOnly}
    />
  );
}
