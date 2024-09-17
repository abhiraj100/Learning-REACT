import React from "react";

// const data = [
//     {
//         id:1,
//         todo: "Eat"
//     },
//     {
//         id:2,
//         todo: "Read"
//     },
//     {
//         id:3,
//         todo: "Code"
//     },
//     {
//         id:4,
//         todo: "Sleep"
//     },
//     {
//         id:5,
//         todo: "Repeat"
//     },
// ]

const TodoList = (props) => {
  return (
    <>
    { 
      props.data.map((props) => (
      <li key={props.id} className="todo-item">

        <span>
      {props.completed ? <></> : 
          <input type="checkbox"  />
      }
          <span className="todo-item-text">{props.todo}</span>
        </span>
        <p>...</p>
      </li>
    ))}
    </>
  );
};

export default TodoList;
