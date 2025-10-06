import { useCartContext } from "../context/useCartContext";
import { CLEAR_CART } from "../context/actionTypes";

export const CartSummary = () => {
  const { state, dispatch } = useCartContext();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: CLEAR_CART })}>Clear Cart</button>
    </div>
  );
};
