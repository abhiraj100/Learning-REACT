import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abhiraj");

  return (
    <>
    <h1>My name is : {name} </h1>
    <button onClick={() => setName("Abhiraj Yadav")}>Full Name</button>
    <h1>Count is : {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count === 0 ? 0 : count - 1)}>Decrement</button>
    <h2>{(count % 2 === 0) ? "Count is Even" : "Count is Odd" }</h2>
    </>
  )
}

export default App
