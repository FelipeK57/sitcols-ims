import {
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Input,
  Select,
  SelectItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { ChevronLeft, ChevronRight, Filter, Plus, Search } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { listProducts } from "../mocks";

export const Products = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-semibold">Productos</h1>
        <article className="flex flex-row justify-end gap-4 w-full">
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button
                variant="bordered"
                className="border-1 border-default-300"
              >
                <Filter className="text-default-600 size-4 min-w-fit" /> Filtrar
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-sm font-medium">Filtrar por</div>
                <div className="flex flex-col gap-2 mt-2">
                  <Select
                    size="sm"
                    variant="bordered"
                    defaultSelectedKeys={["all"]}
                    className="min-w-52"
                    classNames={{
                      trigger: "border-1",
                    }}
                  >
                    <SelectItem key="all">Todas las categorías</SelectItem>
                    <SelectItem key="electronics">Electrónica</SelectItem>
                    <SelectItem key="accessories">Accesorios</SelectItem>
                    <SelectItem key="computers">Computadoras</SelectItem>
                    <SelectItem key="audio">Audio</SelectItem>
                    <SelectItem key="tablets">Tabletas</SelectItem>
                  </Select>
                  <Select
                    size="sm"
                    variant="bordered"
                    defaultSelectedKeys={["asc"]}
                    classNames={{
                      trigger: "border-1",
                    }}
                  >
                    <SelectItem key="asc">Precio: Bajo a Alto</SelectItem>
                    <SelectItem key="desc">Precio: Alto a Bajo</SelectItem>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Input
            variant="bordered"
            startContent={<Search className="size-5 text-default-600" />}
            placeholder="Buscar producto..."
            className="min-w-fit lg:max-w-sm"
            classNames={{
              inputWrapper: "border-1",
            }}
          />
          <Button as={Link} to={"new"} color="primary">
            <Plus className="size-4" /> Crear Producto
          </Button>
        </article>
      </div>
      <section className="border border-default-200 rounded-xl p-4 space-y-4">
        <Table
          aria-label="Resumen de Inventario"
          removeWrapper
          selectionMode="single"
        >
          <TableHeader>
            <TableColumn>CÓDIGO</TableColumn>
            <TableColumn>NOMBRE</TableColumn>
            <TableColumn>STOCK</TableColumn>
            <TableColumn>CATEGORIA</TableColumn>
            <TableColumn>COSTO</TableColumn>
          </TableHeader>
          {listProducts.length > 0 ? (
            <TableBody>
              {listProducts.map((product) => (
                <TableRow
                  onClick={() => {
                    navigate(`${product.id}`);
                  }}
                  className="cursor-pointer"
                  key={product.id}
                >
                  <TableCell>{product.code}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody emptyContent="No hay productos disponibles">
              {[]}
            </TableBody>
          )}
        </Table>
      </section>
      <article className="flex items-center justify-between">
        <Select
          size="sm"
          variant="bordered"
          defaultSelectedKeys={["10"]}
          className="w-36"
          classNames={{
            trigger: "border-1",
          }}
        >
          <SelectItem key="10">Mostrar 10</SelectItem>
          <SelectItem key="25">Mostrar 25</SelectItem>
          <SelectItem key="50">Mostrar 50</SelectItem>
        </Select>
        <div className="flex flex-row gap-2 items-center">
          <Button className="border-1" size="sm" isIconOnly variant="bordered">
            <ChevronLeft className="size-5 text-default-600" />
          </Button>
          <span className="text-sm text-default-600">1 de 5</span>
          <Button className="border-1" size="sm" isIconOnly variant="bordered">
            <ChevronRight className="size-5 text-default-600" />
          </Button>
        </div>
      </article>
    </main>
  );
};
