"use client"

import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { percentile: 10, numOfStudents: 186 },
  { percentile: 20, numOfStudents: 305 },
  { percentile: 30, numOfStudents: 237 },
  { percentile: 40, numOfStudents: 73 },
  { percentile: 50, numOfStudents: 29 },
  { percentile: 60, numOfStudents: 214 },
  { percentile: 70, numOfStudents: 214 },
  { percentile: 80, numOfStudents: 14 },
  { percentile: 90, numOfStudents: 84 },
  { percentile: 100, numOfStudents: 21 },
]

const chartConfig = {
  numOfStudents: {
    label: "Number of Students: ",
    color: "#94a3b8",
  }
} satisfies ChartConfig

export function PercentileChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <CardDescription>
          <div className="flex justify-between">
            <p className="text-slate-700">
              <span className="font-semibold">You scored 30% percentile </span>
              which is lower than the average percentile
              72% of all the engineers who took this assessment.
            </p>
            <p className="text-2xl">📈</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="percentile"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="numOfStudents"
              type="natural"
              stroke="var(--color-numOfStudents)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-numOfStudents)",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <ReferenceLine
              x={30}
              stroke="#94a3b8"
              label={{ value: 'Your Percentile', position: 'center'}}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
