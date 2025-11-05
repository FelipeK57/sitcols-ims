import { Button, Divider, Form, Input } from "@heroui/react";
import { Link } from "react-router";

export const Register = () => {
  return (
    <main className="flex flex-col min-h-svh w-full">
      <article className="flex items-center justify-start p-6">
        <img src="/sitcols-logo.svg" alt="Sitcols Logo" className="h-8" />
      </article>
      <main className="flex flex-1 flex-col gap-4 justify-center max-w-sm mx-auto">
        <h1 className="text-3xl font-semibold">Registrate</h1>
        <p className="text-default-700">
          Crea una cuenta para acceder al sistema de gestión de inventario.
        </p>
        <Form className="space-y-4 w-full">
          <Input
            label="Nombre de usuario"
            labelPlacement="outside"
            placeholder="Ingresa tu nombre de usuario"
            isRequired
          />
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
          <Button color="primary" className="w-full">
            Registrarse
          </Button>
        </Form>
        <Divider />
        <p className="text-sm text-center text-default-700">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-primary font-medium underline">
            Inicia sesión
          </Link>
        </p>
      </main>
    </main>
  );
};
