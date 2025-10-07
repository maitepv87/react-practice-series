import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearCart } from "../store/slices/cartSlice";

export const CartSummary = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};
