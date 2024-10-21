import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount, decrement, decrementByAmount } from './redux/slices/counterSlice';

function App() {

  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className='m-auto container mt-5 bg-red-300 p-10 border-2 border-red-700 rounded-xl'>
        <h1 className='mb-5 text-center font-bold text-3xl text-red-900'>Counter : {value} </h1>
      </div>
      <div className='text-center flex flex-row justify-evenly mt-5 rounded-xl border-2 border-red-700 p-5'>
        <button onClick={() => dispatch(increment())} className='text-red-900 bg-blue-400 border-red-900 border-2 rounded-lg shadow-xl bg-transparent p-5'>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className='text-red-900 bg-blue-400 border-red-900 border-2 rounded-lg shadow-xl bg-transparent p-5'>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))} className='text-red-900 bg-blue-400 border-red-900 border-2 rounded-lg shadow-xl bg-transparent p-5'>
          IncrementByAmount
        </button>
        <button onClick={() => dispatch(decrementByAmount(3))} className='text-red-900 bg-blue-400 border-red-900 border-2 rounded-lg shadow-xl bg-transparent p-5'>
          DecrementByAmount
        </button>
      </div>
    </>
  )
}

export default App
