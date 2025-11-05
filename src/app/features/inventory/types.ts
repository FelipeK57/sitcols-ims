export interface Product {
  id: string;
  code: string;
  name: string;
  description?: string;
  category?: string;
  stock: number;
  minStock?: number;
  cost: number;
  price: number;
  providerId?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface StockMovement {
  id: string;
  productId: string;
  type: "entrada" | "salida";
  quantity: number;
  date: string;
  reference?: string; // por ejemplo número de factura o venta
  userId?: string;
}

export interface Entry {
  id: string;
  date: string;
  providerId: string;
  items: EntryItem[];
  total: number;
  status: "borrador" | "confirmado";
}

export interface EntryItem {
  productId: string;
  quantity: number;
  unitCost: number;
}
