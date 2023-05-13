import CounterContext from "../context/CounterContext";
import { useContext } from "react";

const Counter = () => {
  const countState = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() => {
          countState.setCount(countState.count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countState.setCount(countState.count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
