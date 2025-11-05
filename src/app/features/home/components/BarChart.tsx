import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Lunes",
    Ventas: 40,
  },
  {
    name: "Martes",
    Ventas: 30,
  },
  {
    name: "Miercoles",
    Ventas: 20,
  },
  {
    name: "Jueves",
    Ventas: 27,
  },
  {
    name: "Viernes",
    Ventas: 18,
  },
  {
    name: "Sabado",
    Ventas: 23,
  },
  {
    name: "Domingo",
    Ventas: 34,
  },
];

// #endregion
const SimpleBarChart = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart
            responsive
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Ventas"
              fill="#17c964"
              activeBar={<Rectangle fill="#45d483" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleBarChart;
