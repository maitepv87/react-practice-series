import { useCartStore } from "../store/store";

export const CartList = () => {
  const { items, removeItem } = useCartStore();

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} (${item.price}) × {item.quantity}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
