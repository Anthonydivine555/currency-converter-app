

export function buildXAxisTicks(chartData, count) {
  
  if (chartData.length <= count) {
    return chartData.map((item) => item.label);
  }

  const step = (chartData.length - 1) / (count - 1);

  const ticks = [];

  for (let i = 0; i < count; i++) {
    const index = Math.round(i * step);

    ticks.push(chartData[index].label);
  }

  return ticks;
}