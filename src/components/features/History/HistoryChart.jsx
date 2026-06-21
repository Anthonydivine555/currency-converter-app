import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import { chartData } from "../../data/chart";

export function HistoryChart({ period }) {
  return (
    <div className="h-[377px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData[period]}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CEF739" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#CEF739" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#262626"
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#6B7280",
              fontSize: 12,
            }}
            padding={{
              left: 10,
              right: 10,
            }}
            interval={Math.floor(chartData[period].length / 5)}
          />

          <YAxis
            axisLine={false}
            tickCount={3}
            tickLine={false}
            tick={{
              fill: "#6B7280",
              fontSize: 12,
            }}
            width={60}
            domain={["dataMin", "dataMax"]}
            tickFormatter={(value) => value.toFixed(4)}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#141414",
              border: "1px solid #2A2A2A",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Area
            type="linear"
            dataKey="rate"
            stroke="#CEF739"
            strokeWidth={2}
            fill="url(#chartFill)"
            dot={false}
            activeDot={{
              r: 4,
              stroke: "#CEF739",
              strokeWidth: 2,
              fill: "#111",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}