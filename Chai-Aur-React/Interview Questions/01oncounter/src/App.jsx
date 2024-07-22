import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => {return prevCounter + 1});
    setCounter((prevCounter) => prevCounter + 1 );
    setCounter((prevCounter) => prevCounter + 1 );
    setCounter((prevCounter) => prevCounter + 1 );
  }

  const removeValue = () => {
    if(counter != 0) {
    setCounter( counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App;