import { useCartStore, CartItem } from "../store/store";

type Props = {
  item: CartItem;
};

export const AddToCartButton = ({ item }: Props) => {
  const { addItem } = useCartStore();

  const handleClick = () => {
    addItem(item);
  };

  return <button onClick={handleClick}>Add to Cart</button>;
};
