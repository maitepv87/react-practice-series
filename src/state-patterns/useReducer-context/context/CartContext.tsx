import { createContext } from "react";
import { CartState, CartAction } from "./cartReducer";

// Define el tipo del contexto: estado + dispatch
export const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);
