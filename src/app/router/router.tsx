import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "../components/layout/MainLayout";

// Routes
import { UsersPage } from "../features/users/pages/UsersPage";
import { Register } from "../features/auth/pages/Register";
import { Login } from "../features/auth/pages/Login";
import { Products } from "../features/inventory/pages/Products";
import { Home } from "../features/home/pages/Home";
import { NewProduct } from "../features/inventory/pages/NewProduct";
import { EditProduct } from "../features/inventory/pages/EditProduct";
import { NotFoundPage } from "../lib/NotFoundPage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          // Inventory Routes
          <Route path="products" element={<Products />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:productId" element={<EditProduct />} />
          // Users Routes
          <Route path="users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
