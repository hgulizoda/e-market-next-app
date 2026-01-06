import I_API from "@/app/types";
import { create } from "zustand";

const CART_KEY = "cart";

const loadCart = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export type CartItem = I_API & {
  quantity: number;
};

const saveCart = (cart: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

interface CartState {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: loadCart(),

  addItem: (item) => {
    const cart = get().cart;
    const existing = cart.find((i) => i.id === item.id);

    let updatedCart: CartItem[];

    if (existing) {
      updatedCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    saveCart(updatedCart);
    set({ cart: updatedCart });
  },

  removeItem: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);
    saveCart(updatedCart);
    set({ cart: updatedCart });
  },

  increaseQuantity: (id) => {
    const updatedCart = get().cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(updatedCart);
    set({ cart: updatedCart });
  },

  decreaseQuantity: (id) => {
    const updatedCart = get()
      .cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updatedCart);
    set({ cart: updatedCart });
  },

  clearCart: () => {
    saveCart([]);
    set({ cart: [] });
  },
}));

export default useCartStore;
