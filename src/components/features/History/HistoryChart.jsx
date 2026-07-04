import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { buildChartData } from "./historyUtills/buildChartData";
import { buildXAxisTicks } from "./historyUtills/buildXAxisTicks";
import { buildYAxisTicks } from "./historyUtills/buildYAxisTicks";

export function HistoryChart({ historyData, period}) {
  // Prepare chart data
  const chartData = buildChartData(historyData, period);

  const tickCount =
  window.innerWidth < 480
    ? 3
    : 5;

  const xAxisTicks = buildXAxisTicks(chartData, tickCount);

  const yAxisTicks = buildYAxisTicks(chartData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CEF739" stopOpacity={0.45} />

            <stop offset="100%" stopColor="#CEF739" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          vertical={false}
          stroke="#2B2B2B"
          strokeDasharray="2 4"
        />

        <XAxis
          dataKey="label"
          ticks={xAxisTicks}
          interval={0}
          axisLine={false}
          tickLine={false}
          dy={8}
          tick={{
            fill: "#7A7A7A",
            fontSize: 11,
          }}
          tickMargin={10}
          allowDataOverflow={false}
        />

        <YAxis
          ticks={yAxisTicks}
          width={45}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.toFixed(2)}
          tick={{
            fill: "#7A7A7A",
            fontSize: 11,
          }}
        />

        <Tooltip
          cursor={{
            stroke: "#CEF739",
            strokeDasharray: "4 4",
          }}
          contentStyle={{
            backgroundColor: "#171719",
            border: "1px solid #2A2A2A",
            borderRadius: "12px",
            color: "#fff",
          }}
        />

        <Area
          dataKey="rate"
          stroke="#CEF739"
          strokeWidth={2.5}
          fill="url(#chartFill)"
          dot={false}
          activeDot={{
            r: 4,
            fill: "#CEF739",
            stroke: "#1A1A1A",
            strokeWidth: 2,
          }}
          isAnimationActive
          animationDuration={600}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
