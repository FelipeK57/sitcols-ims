import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import type { PieLabelRenderProps } from "recharts";

const data = [
  { name: "Entradas", value: 322 },
  { name: "Salidas", value: 439 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#006FEE", "#7828c8"];

const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
  } = props;

  const nMidAngle = midAngle as number;
  const nPercent = percent as number;

  const ncx = Number(cx);
  const ncy = Number(cy);
  const nInner = Number(innerRadius);
  const nOuter = Number(outerRadius);

  // controla qué tan lejos se ubican las etiquetas
  const radius = nInner + (nOuter - nInner) * 0.6;

  const x = ncx + radius * Math.cos(-nMidAngle * RADIAN);
  const y = ncy + radius * Math.sin(-nMidAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={14}
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(nPercent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartWithCustomizedLabel({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
              isAnimationActive={isAnimationActive}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full flex flex-col items-center space-y-2">
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          {data.map((entry, index) => (
            <li key={entry.name} className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>{entry.name}</span>
              <span className="text-default-500">
                ({((entry.value / total) * 100).toFixed(0)}%)
              </span>
            </li>
          ))}
        </ul>

        <p className="text-sm font-semibold text-default-700">
          Total: {total.toLocaleString()}
        </p>
      </div>
    </div>
  );
}