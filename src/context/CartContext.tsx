import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Product } from "@/data/products";
import { toast } from "sonner";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "yhs.cart.v1";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id: string, qty: number) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: Math.max(0, qty) } : i))
        .filter((i) => i.quantity > 0),
    );

  const clear = () => setItems([]);

  const { count, total } = useMemo(
    () => ({
      count: items.reduce((s, i) => s + i.quantity, 0),
      total: items.reduce((s, i) => s + i.quantity * i.price, 0),
    }),
    [items],
  );

  return (
    <CartContext.Provider value={{ items, count, total, addToCart, removeFromCart, updateQuantity, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
