import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  brand?: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
  prescriptionId?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);
        
        if (existingItem) {
          const updatedItems = currentItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          );
          set({ items: updatedItems, total: calculateTotal(updatedItems) });
        } else {
          const updatedItems = [...currentItems, item];
          set({ items: updatedItems, total: calculateTotal(updatedItems) });
        }
      },
      removeItem: (id) => {
        const updatedItems = get().items.filter((i) => i.id !== id);
        set({ items: updatedItems, total: calculateTotal(updatedItems) });
      },
      updateQuantity: (id, quantity) => {
        const updatedItems = get().items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        );
        set({ items: updatedItems, total: calculateTotal(updatedItems) });
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    { name: 'opti-buzz-cart' }
  )
);

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
