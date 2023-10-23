import { useState } from "react";
import { useCount } from "./hooks/useCount";
// import { Link } from "react-router-dom";
import "./styles.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App">
       <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <input value={newCount} type="number" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set count value</button>
      {/* <Link to="/">
        {" "}
        <p>Back to Hompage</p>{" "}
      </Link> */}
    </div>
  );
}

