import { useAppSelector, useAppDispatch } from "../store/hooks";
import { removeItem } from "../store/slices/cartSlice";

export const CartList = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} (${item.price}) × {item.quantity}
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
