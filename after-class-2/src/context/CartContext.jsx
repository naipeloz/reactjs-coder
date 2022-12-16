import { createContext } from "react";

const CartContext = createContext({
  user : {},
  cart: [],
  addToCart: () => {},
});

export default CartContext;
