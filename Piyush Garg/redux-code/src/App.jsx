import "./App.css";
import Counter from "./components/Count";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={ (e) => dispatch({ type: "INCREMENT" })}>Increment</button>
        <Counter />
        <button onClick={ (e) => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </>
  );
}

export default App;
