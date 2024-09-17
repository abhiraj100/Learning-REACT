
import './App.css'
import Header from './components/Header';
import TodoList from './components/TodoList';
import ToDoButton from './components/ToDoButton';

const data = [
  {
      id:1,
      todo: "Eat",
      completed: false
  },
  {
      id:2,
      todo: "Read",
      completed: false
  },
  {
      id:3,
      todo: "Code",
      completed: false
  },
  {
      id:4,
      todo: "Sleep",
      completed: true
  },
  {
      id:5,
      todo: "Repeat",
      completed: false
  },
]

const App = () => {

  return (
    <>
      <div className='todo-container'>
      <Header title="Todo" />
      <TodoList data={data}/>
      <ToDoButton />
      </div>
    </>
  )
}

export default App;
