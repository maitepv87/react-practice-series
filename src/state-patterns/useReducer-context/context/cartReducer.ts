import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "./actionTypes";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: typeof ADD_ITEM; payload: CartItem }
  | { type: typeof REMOVE_ITEM; payload: { id: string } }
  | { type: typeof CLEAR_CART };

export const initialState: CartState = {
  items: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}
