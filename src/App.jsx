import "./App.css";
import products from "./DB";
import { useContext } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const containerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <div style={containerStyles}>
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      <Cart />
    </>
  );
}

export default App;
