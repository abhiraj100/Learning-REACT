import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
    const counterContext = useContext(CounterContext);

  return (
    <>
      <div className="flex  m-4 gap-4">
        <button onClick={() => counterContext.setCount(counterContext.count + 1)} className="border border-black px-4">Increment</button>
        <button onClick={() => counterContext.setCount(counterContext.count - 1)} className="border border-black px-4">Decrement</button>
      </div>
    </>
  );
};

export default Counter;
