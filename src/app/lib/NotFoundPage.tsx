import { Button } from "@heroui/react";
import { ArrowLeft } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <main className="grid place-content-center place-items-center gap-6 h-full">
      <h1 className="text-center font-bold text-4xl">
        Parece que no encontramos lo que buscas
      </h1>
      <p className="text-sm">
        Intenta verificar la URL o vuelve a la página anterior.
      </p>
      <Button
        color="primary"
        className="w-fit"
        onPress={() => window.history.back()}
      >
        <ArrowLeft className="size-5" /> Volver
      </Button>
    </main>
  );
};
