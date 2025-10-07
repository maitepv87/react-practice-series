import { useCartContext } from "../context/useCartContext";
import { CartItem } from "../context/cartReducer";
import { addItem } from "../context/actions/cartActions";

type Props = {
  item: CartItem;
};

export const AddToCartButton = ({ item }: Props) => {
  const { dispatch } = useCartContext();

  const handleClick = () => {
    dispatch(addItem(item));
  };

  return <button onClick={handleClick}>Add to Cart</button>;
};
