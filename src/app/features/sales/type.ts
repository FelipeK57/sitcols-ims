export interface Client {
  id: number;
  name: string;
  contact?: string;
  email?: string;
  phone?: string;
  address?: string;
  taxId?: string;
}

export interface Sale {
  id: number;
  clientId: number;
  date: string;
  items: SaleItem[];
  total: number;
  status: "pendiente" | "pagado" | "anulado";
  notes?: string;
}

export interface SaleItem {
  productId: number;
  quantity: number;
  price: number;
  subtotal: number;
}
