import { useContext } from 'react';
import Counter from "./components/Counter";
import "./App.css";
import { CounterContext } from './context/Counter';

function App() {

  const counterState = useContext(CounterContext);

  console.log("Context", counterState);

  return (
    <div className='App'>
        <h1 className="ml-20 mt-12">Count is {counterState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
    </div>
  );
}

export default App;
