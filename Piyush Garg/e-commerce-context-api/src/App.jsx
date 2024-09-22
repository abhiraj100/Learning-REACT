
import './App.css'
import Cart from './components/Cart';
import Item from './components/Item';

function App() {

  return (
    <div className='App'>
    <Item name="Macbook pro M2" price={10000}/>
    <Item name="iPhone" price={1000}/>
    <Item name="Pendrive" price={50}/>

    <Cart />
    </div>
  )
}

export default App;
