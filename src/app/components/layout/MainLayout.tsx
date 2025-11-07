import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const MainLayout = () => {
  return (
    <main className="flex flex-row h-svh">
      <Sidebar />
      <section className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
