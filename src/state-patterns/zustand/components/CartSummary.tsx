import { useCartStore } from "../store/store";

export const CartSummary = () => {
  const { items, clearCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};
