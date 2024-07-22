import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg'; // Adjusted path for viteLogo
import './App.css';
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0);

  // let myObj = {
  //   username: "abhiraj",
  //   age:22
  // }

  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      {/* <Card channel="chai aur code" myArr=[1,2,3] myObj={name:"chai"} />  // client:176 [hmr] Failed to reload /src/App.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above) */}
      {/* <Card channel="chai aur code" someObj={myObj} someArr={newArr} /> */}
      <Card username="Abhiraj" btnText="click me"/>
      <Card username="Rahul" btnText="visit me"/>
      {/* <Card username="Rahul" />  // in case you don't pass btnText */}
    </>
  );
}

export default App;







// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
//       <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
//         <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
//         <div className="pt-6 space-y-4">
//           <blockquote>
//             <p className="text-lg font-medium">
//               “Tailwind CSS is the only framework that I've seen scale
//               on large teams. It’s easy to customize, adapts to any design,
//               and the build size is tiny.”
//             </p>
//           </blockquote>
//           <figcaption className="font-medium">
//             <div className="text-sky-500 dark:text-sky-400">
//               Sarah Dayan
//             </div>
//             <div className="text-slate-700 dark:text>
//               Staff Engineer, Algolia
//             </div>
//           </figcaption>
//         </div>
//       </figure>

//     </>
//   )
// }

// export default App
