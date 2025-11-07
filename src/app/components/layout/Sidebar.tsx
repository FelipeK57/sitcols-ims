import {
  Home,
  FileBox,
  ArrowUpDown,
  ShoppingCart,
  Users2,
  BarChart3,
  LogOut,
  Settings,
} from "lucide-react";
import { Link } from "react-router";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 border-r border-default-200">
      <div className="flex items-center h-16 p-4 border-b border-default-200">
        <img
          src="/sitcols-ims-logo.svg"
          alt="Sitcols IMS Logo"
          className="w-32"
        />
      </div>
      <nav className="space-y-2 p-4">
        {modules.map((module) => (
          <div key={module.name}>
            <h3 className="text-xs font-medium text-default-500 uppercase mb-1">
              {module.name}
            </h3>
            <ul className="flex flex-col gap-1">
              {module.routes.map((route) => (
                <li key={route.name}>
                  <Link
                    to={`/${route.path}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-default-700 hover:bg-default-100"
                  >
                    {route.icon}
                    <span className="text-sm">{route.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export const modules = [
  {
    name: "General",
    routes: [{ name: "Inicio", path: "", icon: <Home className="size-5" /> }],
  },
  {
    name: "Inventario",
    routes: [
      {
        name: "Productos",
        path: "products",
        icon: <FileBox className="size-5" />,
        children: [
          {
            name: "Nuevo producto",
            path: "new",
          },
          {
            name: "Editar producto",
            path: "edit",
          },
        ],
      },
      {
        name: "Entradas",
        path: "entries",
        icon: <ArrowUpDown className="size-5 rotate-180" />,
      },
      {
        name: "Salidas",
        path: "sales",
        icon: <ArrowUpDown className="size-5" />,
      },
    ],
  },
  {
    name: "Ventas",
    routes: [
      {
        name: "Registrar venta",
        path: "sales/register",
        icon: <ShoppingCart className="size-5" />,
      },
      {
        name: "Clientes",
        path: "clients",
        icon: <Users2 className="size-5" />,
      },
    ],
  },
  {
    name: "Reportes",
    routes: [
      {
        name: "Reportes generales",
        path: "reports",
        icon: <BarChart3 className="size-5" />,
      },
    ],
  },
  {
    name: "Configuración",
    routes: [
      {
        name: "Usuarios y roles",
        path: "users",
        icon: <Settings className="size-5" />,
      },
      {
        name: "Cerrar sesión",
        path: "logout",
        icon: <LogOut className="size-5" />,
      },
    ],
  },
];
