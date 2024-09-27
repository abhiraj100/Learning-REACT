import React from 'react';
import Timer from './components/Timer';

const App = () => {
  return (
    <>
    <Timer />
    </>
  )
}

export default App;










// import { useEffect, useState } from 'react'
// import './App.css'
// import MyComponent from './components/MyComponent';

// function App() {

//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     console.log("using useEffect hooks");
//   }, [])

//   return (
//     <>
//     {isVisible ? <MyComponent /> : <></>}
//     <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
//     </>
//   )
// }

// export default App;
