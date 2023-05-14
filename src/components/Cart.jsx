import React from "react";

import { useContext } from "react";

import CartContext from "../context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.item.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.item.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}

      <h5>Total bill {total}</h5>
    </div>
  );
};

export default Cart;
