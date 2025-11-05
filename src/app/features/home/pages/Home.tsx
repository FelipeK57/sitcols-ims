import {
  CircleAlert,
  DollarSign,
  RefreshCcw,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
// import type { Sale } from "../../sales/type";
import PieChartWithCustomizedLabel from "../components/PieChart";
import SimpleBarChart from "../components/BarChart";

export const Home = () => {
  return (
    <main className="flex flex-col gap-4 h-fit">
      <h1 className="text-xl font-semibold">
        Bienvenido a la página de inicio
      </h1>
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <article
            key={kpi.id}
            className="space-y-6 border border-default-200 p-4 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm">{kpi.title}</h3>
              <RefreshCcw className="size-4" />
            </div>
            <div className="flex items-center gap-4">
              <div className={`p-2 bg-${kpi.color}-100 rounded-lg`}>
                <kpi.icon className={`size-6 text-${kpi.color}-500`} />
              </div>
              <p className="text-4xl font-medium">{kpi.value}</p>
            </div>
            <p className="text-sm text-default-500">{kpi.description}</p>
          </article>
        ))}
      </section>
      <section className="grid grid-cols-2 gap-4">
        <article className="border border-default-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm">Movimientos esta semana</h2>
            <RefreshCcw className="size-4" />
          </div>
          <article className="flex items-center justify-center">
            <PieChartWithCustomizedLabel />
          </article>
        </article>
        <article className="border border-default-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm">Ventas esta semana</h2>
            <RefreshCcw className="size-4" />
          </div>
          <article className="flex items-center justify-center">
            <SimpleBarChart />
          </article>
        </article>
      </section>
    </main>
  );
};

const kpiData = [
  {
    id: 1,
    title: "Ventas del mes",
    icon: DollarSign,
    value: "$25,000",
    color: "success",
    description: "Estas son las ventas totales del mes actual.",
  },
  {
    id: 2,
    title: "Productos vendidos",
    icon: ShoppingBag,
    value: "200",
    color: "primary",
    description: "Número total de productos vendidos este mes.",
  },
  {
    id: 3,
    title: "Bajo stock",
    icon: CircleAlert,
    value: "8",
    color: "danger",
    description: "Número de productos que están por debajo del nivel de stock mínimo.",
  },
  {
    id: 4,
    title: "Margen promedio",
    icon: TrendingUp,
    value: "15%",
    color: "warning",
    description: "Margen de beneficio promedio en las ventas realizadas.",
  },
];

// const recentSales: Sale[] = [
//   {
//     id: 1,
//     clientId: 101,
//     date: "2024-06-01",
//     items: [
//       { productId: 201, quantity: 2, price: 50, subtotal: 100 },
//       { productId: 202, quantity: 1, price: 150, subtotal: 150 },
//     ],
//     total: 250,
//     status: "pagado",
//     notes: "Entrega rápida solicitada",
//   },
//   {
//     id: 2,
//     clientId: 102,
//     date: "2024-06-02",
//     items: [
//       { productId: 203, quantity: 3, price: 30, subtotal: 90 },
//       { productId: 204, quantity: 2, price: 80, subtotal: 160 },
//     ],
//     total: 250,
//     status: "pendiente",
//   },
//   {
//     id: 3,
//     clientId: 103,
//     date: "2024-06-03",
//     items: [{ productId: 205, quantity: 5, price: 20, subtotal: 100 }],
//     total: 100,
//     status: "anulado",
//   },
//   {
//     id: 4,
//     clientId: 104,
//     date: "2024-06-04",
//     items: [
//       { productId: 206, quantity: 1, price: 200, subtotal: 200 },
//       { productId: 207, quantity: 4, price: 25, subtotal: 100 },
//     ],
//     total: 300,
//     status: "pagado",
//     notes: "Cliente frecuente",
//   },
//   {
//     id: 5,
//     clientId: 105,
//     date: "2024-06-05",
//     items: [{ productId: 208, quantity: 2, price: 75, subtotal: 150 }],
//     total: 150,
//     status: "pendiente",
//   },
//   {
//     id: 6,
//     clientId: 106,
//     date: "2024-06-06",
//     items: [
//       { productId: 209, quantity: 3, price: 40, subtotal: 120 },
//       { productId: 210, quantity: 2, price: 60, subtotal: 120 },
//     ],
//     total: 240,
//     status: "pagado",
//   },
//   {
//     id: 7,
//     clientId: 107,
//     date: "2024-06-07",
//     items: [{ productId: 211, quantity: 1, price: 300, subtotal: 300 }],
//     total: 300,
//     status: "anulado",
//   },
//   {
//     id: 8,
//     clientId: 108,
//     date: "2024-06-08",
//     items: [
//       { productId: 212, quantity: 2, price: 90, subtotal: 180 },
//       { productId: 213, quantity: 1, price: 110, subtotal: 110 },
//     ],
//     total: 290,
//     status: "pagado",
//   }
// ];
