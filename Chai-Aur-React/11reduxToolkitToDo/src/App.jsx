import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-8 mt-2 border-red-600">List Your TODO's with Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App;
