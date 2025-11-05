import { useUserStore } from "@/app/stores/auth.store";
import { Button, Divider, Form, Input } from "@heroui/react";
import { Link, useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const { setRole } = useUserStore();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRole("admin");
    navigate("/");
  };

  return (
    <main className="flex flex-col min-h-svh w-full ">
      <article className="flex items-center justify-start p-6">
        <img src="/sitcols-logo.svg" alt="Sitcols Logo" className="h-8" />
      </article>
      <main className="flex flex-1 flex-col gap-4 justify-center max-w-sm mx-auto">
        <h1 className="text-3xl font-semibold">Inicia sesión</h1>
        <p className="text-default-700">
          Ingresa a tu cuenta para acceder al sistema de gestión de inventario.
        </p>
        <Form onSubmit={handleLogin} className="space-y-4 w-full">
          <Input
            label="Correo electrónico"
            labelPlacement="outside"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            isRequired
          />
          <Input
            label="Contraseña"
            labelPlacement="outside"
            placeholder="Ingresa tu contraseña"
            type="password"
            isRequired
          />
          <Button type="submit" color="primary" className="w-full">
            Iniciar sesión
          </Button>
        </Form>
        <Divider />
        <p className="text-sm text-center text-default-700">
          ¿Aún no tienes una cuenta?{" "}
          <Link to="/register" className="text-primary font-medium underline">
            Regístrate
          </Link>
        </p>
      </main>
    </main>
  );
};
