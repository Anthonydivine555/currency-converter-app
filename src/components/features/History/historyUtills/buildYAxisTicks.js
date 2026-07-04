export function buildYAxisTicks(chartData) {
  
  const rates = chartData.map((item) => item.rate);

  const min = Math.min(...rates);

  const max = Math.max(...rates);

  const middle = (min + max) / 2;

  return [
    min,
    middle,
    max,
  ];
}