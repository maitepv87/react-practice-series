import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./cartReducer";

type Props = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
