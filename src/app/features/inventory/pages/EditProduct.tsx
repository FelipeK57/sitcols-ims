import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@heroui/react";
import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "../types";
import { useLocation } from "react-router";
import { listProducts } from "../mocks";

export const EditProduct = () => {
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    console.log(pathSegments);
    const productId = pathSegments[pathSegments.length - 1];
    const foundProduct = listProducts.find(
      (item) => item.id.toString() === productId
    );
    if (foundProduct) {
      setTimeout(() => {
        setProduct(foundProduct);
      }, 500);
    }
  }, [location]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <Spinner variant="wave" />
        <p className="text-default-600 text-sm">
          Cargando datos del producto...
        </p>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Editar producto</h1>
      <h2 className="uppercase font-medium text-xs text-default-500">
        Datos del producto
      </h2>
      <article className="grid grid-cols-2 gap-4">
        <Input
          defaultValue={product.name}
          label="Nombre del producto"
          labelPlacement="outside"
          placeholder="Ingrese el nombre del producto"
          isRequired
        />
        <Input
          defaultValue={product.code}
          label="Código del producto"
          labelPlacement="outside"
          placeholder="Ingrese el código del producto"
          isRequired
        />
        <Select
          defaultSelectedKeys={[product.providerId as string]}
          label="Proveedor"
          labelPlacement="outside"
          placeholder="Seleccione un proveedor"
          isRequired
        >
          <SelectItem key="prov1">Proveedor 1</SelectItem>
          <SelectItem key="prov2">Proveedor 2</SelectItem>
          <SelectItem key="prov3">Proveedor 3</SelectItem>
        </Select>
        <Select
          defaultSelectedKeys={[product.category as string]}
          label="Categoría"
          labelPlacement="outside"
          placeholder="Seleccione una categoría"
          isRequired
        >
          <SelectItem key="Electrónica">Electrónica</SelectItem>
          <SelectItem key="Accesorios">Accesorios</SelectItem>
          <SelectItem key="Computadoras">Computadoras</SelectItem>
          <SelectItem key="Audio">Audio</SelectItem>
          <SelectItem key="Tabletas">Tabletas</SelectItem>
        </Select>
        <Textarea
          defaultValue={product.description}
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
          defaultValue={product.cost.toString()}
          startContent={<span className="text-default-500">$</span>}
          label="Costo"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el costo del producto"
          isRequired
        />
        <Input
          defaultValue={product.price.toString()}
          startContent={<span className="text-default-500">$</span>}
          label="Precio de venta"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el precio de venta del producto"
          isRequired
        />
        <Input
          defaultValue={product.stock.toString()}
          label="Stock inicial"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el stock inicial del producto"
          isRequired
        />
        <Input
          defaultValue={product.minStock?.toString()}
          label="Stock mínimo"
          type="number"
          labelPlacement="outside"
          placeholder="Ingrese el stock mínimo del producto"
          isRequired
        />
      </article>
      <article className="flex flex-row gap-4 justify-end items-center">
        <Button color="primary">
          <Save className="size-4" /> Guardar cambios
        </Button>
      </article>
    </main>
  );
};
