import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "../components/layout/MainLayout";

// Routes
import { ReadxPresentation } from "../lib/ReadxPresentation";
import { UsersPage } from "../features/users/pages/UsersPage";
import { Register } from "../features/auth/pages/Register";
import { Login } from "../features/auth/pages/Login";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ReadxPresentation />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
