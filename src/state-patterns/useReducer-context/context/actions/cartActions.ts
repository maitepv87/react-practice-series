import { CartItem, CartAction } from "../cartReducer";
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../actionTypes";

export const addItem = (item: CartItem): CartAction => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (id: string): CartAction => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const clearCart = (): CartAction => ({
  type: CLEAR_CART,
});
