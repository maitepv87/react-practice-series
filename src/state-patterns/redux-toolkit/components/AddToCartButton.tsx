import { useAppDispatch } from "../store/hooks";
import { addItem, CartItem } from "../store/slices/cartSlice";

type Props = {
  item: CartItem;
};

export const AddToCartButton = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addItem(item));
  };

  return <button onClick={handleClick}>Add to Cart</button>;
};
