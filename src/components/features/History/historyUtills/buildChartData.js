import {formatXAxisLabel} from './formatXAxisLabel'


export function buildChartData (historyData, period) {
  return historyData.map((item) => ({
    ...item,
    label: formatXAxisLabel(item.date, period),
  }));

}