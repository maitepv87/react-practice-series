import { useCartContext } from "../context/useCartContext";
import { CartItem } from "../context/cartReducer";
import { ADD_ITEM } from "../context/actionTypes";

type Props = {
  item: CartItem;
};

export const AddToCartButton = ({ item }: Props) => {
  const { dispatch } = useCartContext();

  const handleClick = () => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  return <button onClick={handleClick}>Add to Cart</button>;
};
