import { useCartContext } from "../context/useCartContext";
import { removeItem } from "../context/actions/cartActions";

export const CartList = () => {
  const { state, dispatch } = useCartContext();

  if (state.items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {state.items.map((item) => (
        <li key={item.id}>
          {item.name} (${item.price}) × {item.quantity}
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
