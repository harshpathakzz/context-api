import { useContext } from "react";
import CartContext from "../context/CartContext";

function Card({ name, price }) {
  const cartState = useContext(CartContext);
  console.log(cartState);
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{price}</p>
        <button
          onClick={() =>
            cartState.setItem([...cartState.item, { name, price }])
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
