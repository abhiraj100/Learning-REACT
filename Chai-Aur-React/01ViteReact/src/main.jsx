import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1 style={{color:'red'}}>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)


const anotherUser = " chai aur react";

// Babel inject it (by default it is automatically inject)
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     {/* MyApp()  it is also run */}
//     <MyApp />
//     <ReactElement />
//   </React.StrictMode>,
// )



ReactDOM.createRoot(document.getElementById('root')).render(

  // anotherElement,
  reactElement
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
