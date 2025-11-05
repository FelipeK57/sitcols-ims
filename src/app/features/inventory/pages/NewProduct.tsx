import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { BrushCleaning, Save } from "lucide-react";

export const NewProduct = () => {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Nuevo producto</h1>
      <h2 className="uppercase font-medium text-xs text-default-500">
        Datos del producto
      </h2>
      <article className="grid grid-cols-2 gap-4">
        <Input
          label="Nombre del producto"
          labelPlacement="outside"
          placeholder="Ingrese el nombre del producto"
          isRequired
        />
        <Input
          label="Código del producto"
          labelPlacement="outside"
          placeholder="Ingrese el código del producto"
          isRequired
        />
        <Select
          label="Proveedor"
          labelPlacement="outside"
          placeholder="Seleccione un proveedor"
          isRequired
        >
          <SelectItem key="proveedor1">Proveedor 1</SelectItem>
          <SelectItem key="proveedor2">Proveedor 2</SelectItem>
          <SelectItem key="proveedor3">Proveedor 3</SelectItem>
        </Select>
        <Select
          label="Categoría"
          labelPlacement="outside"
          placeholder="Seleccione una categoría"
          isRequired
        >
          <SelectItem key="categoria1">Categoría 1</SelectItem>
          <SelectItem key="categoria2">Categoría 2</SelectItem>
          <SelectItem key="categoria3">Categoría 3</SelectItem>
        </Select>
        <Textarea
          label="Descripción"
          labelPlacement="outside"
          className="col-span-2"
          placeholder="Ingrese la descripción del producto"
        />
      </article>
      <Divider />
      <h2 className="uppercase font-medium text-xs text-default-500">
        DATOS DE INVENTARIO Y PRECIOS
      </h2>
      <article className="grid grid-cols-2 gap-4">
        <Input
          startContent={<span className="text-default-500">$</span>}
          label="Costo"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el costo del producto"
          isRequired
        />
        <Input
          startContent={<span className="text-default-500">$</span>}
          label="Precio de venta"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el precio de venta del producto"
          isRequired
        />
        <Input
          label="Stock inicial"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el stock inicial del producto"
          isRequired
        />
        <Input
          label="Stock mínimo"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el stock mínimo del producto"
          isRequired
        />
      </article>
      <article className="flex flex-row gap-4 justify-end items-center">
        <Button variant="bordered">
          <BrushCleaning className="size-4" /> Limpiar formulario
        </Button>
        <Button color="primary">
          <Save className="size-4" /> Guardar producto
        </Button>
      </article>
    </main>
  );
};
