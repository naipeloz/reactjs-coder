import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getUser = () => {
    return ({
      username: 'julianpeloz',
      name: 'Julian Salcedo',
      country: 'Colombia'
    })
  }

  const addToCart = (product) => {
    setCart({...cart, product})
  }

  return (
    <CartContext.Provider value={{
      user: getUser(),
      cart,
      addToCart: (product) => addToCart(product),
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;
