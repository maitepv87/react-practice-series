import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

type Store = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<Store>()((set) => ({
  items: [],
  addItem: (newItem) =>
    set((previousState) => {
      const itemAlreadyInCart = previousState.items.find(
        (cartItem) => cartItem.id === newItem.id
      );

      if (itemAlreadyInCart) {
        const updatedItems = previousState.items.map((cartItem) =>
          cartItem.id === newItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        return { items: updatedItems };
      }

      const newCartItem = { ...newItem, quantity: 1 };
      return { items: [...previousState.items, newCartItem] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () => set(() => ({ items: [] })),
}));
