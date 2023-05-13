import "./App.css";

import { useContext } from "react";
import CounterContext from "./context/CounterContext";
import Counter from "./components/Counter";
function App() {
  const countState = useContext(CounterContext);
  console.log(countState);

  return (
    <>
      <h1>Count is {countState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
