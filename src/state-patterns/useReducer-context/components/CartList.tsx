import { useCartContext } from "../context/useCartContext";
import { REMOVE_ITEM } from "../context/actionTypes";

export const CartList = () => {
  const { state, dispatch } = useCartContext();

  if (state.items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {state.items.map((item) => (
        <li key={item.id}>
          {item.name} (${item.price}) × {item.quantity}
          <button
            onClick={() =>
              dispatch({ type: REMOVE_ITEM, payload: { id: item.id } })
            }
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
