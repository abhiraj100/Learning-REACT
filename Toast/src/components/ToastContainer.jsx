import React, { useRef, useState } from "react";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  // to clearTimeout if we close the toast and we want that it clear timeout
  const timersRef = useRef({});

  // handleClose
  const handleClose = (id) => {
    // const filteredArr = toasts.filter((toasts) => {
    //   return toasts.id !== id;
    // });
    // setToasts(filteredArr);

    // issue -> when we use state in our asynchronous code callback, it remember prev/old state when it is created.
    // optimization
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id]; // remove key, value pair from an object

    setToasts((prevToasts) => {
      const filteredArr = prevToasts.filter((toast) => {
        return toast.id !== id;
      });
      return filteredArr;
    });
  };

  // handleAdd
  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toasts, { id: id, message: message, type: type }];
    setToasts(newToasts);
    // setTimeout(() => handleClose(id), 5000);
    timersRef.current[id] = setTimeout(() => handleClose(id), 5000);
  };

  return (
    <div className="container">
      <div className="toast-container">
        {toasts?.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>x</span>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleAdd("Info", "info")}>Info Toast</button>
        <button onClick={() => handleAdd("Warning", "warning")}>
          Warning Toast
        </button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
      </div>

      <h2 className="title">Created by Abhiraj Yadav</h2>
    </div>
  );
};

export default ToastContainer;

// import React, { useState} from 'react'

// const ToastContainer = () => {
//   const [show, setShow] = useState();

//   // handleClose
//   const handleClose = () => {setShow(false);}

//   // handleAdd
//   const handleAdd = () => {
//     setShow(true);
//     setTimeout(handleClose, 5000);
//   }

//   return (
//     <div className='container'>
//       <div className='toast-container'>
//         {
//           show && (<div className='toast'>
//             Success Toast <span onClick={handleClose}>x</span>
//         </div>)
//         }
//       </div>
//       <div className='btn-container'>
//         <button onClick={handleAdd}>Success Toast</button>
//         <button>Info Toast</button>
//         <button>Warning Toast</button>
//         <button>Error Toast</button>
//       </div>
//     </div>
//   )
// }

// export default ToastContainer;
