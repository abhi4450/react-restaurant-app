import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
    return defaultCartState;
};

const CartProvider = (props) => {

   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHanlder = (item) => {
      dispatchCartAction({type:})
  };
  const removeItemFromCartHanlder = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHanlder,
    removeItem: removeItemFromCartHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
