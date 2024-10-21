// import { useState } from 'react';
import './App.css'
// import {userList} from "/src/userList.js";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from './reducer/userReducer';

function App() {
  // const [users, setUsers] = useState(userList);

  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    // console.log(index);
    dispatch(userDelete(index))
    
  };

  return (
    <>
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>User List</h1>
      <ul>
        {
          users.map((user, index) => {
            return (
              <li key={user.id}>
                <h1>{user.name} <span onClick={() => deleteHandler(index)} className='text-red-500 font-black cursor-pointer'>X</span></h1>
              </li>
            );
          })
        }
      </ul>
    </div>
    </>
  )
}

export default App;
