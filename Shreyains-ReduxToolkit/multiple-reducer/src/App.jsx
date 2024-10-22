import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';

function App() {

  return (
    <>
      <div className='w-screen h-screen'>
      <nav className='py-5 flex border-2 border-red-700 bg-sky-200 rounded-lg justify-center gap-10'>
      <Link to="/" className='border-2 p-2 border-pink-700 rounded-lg'>Home</Link>
      <Link to="/users" className='border-2 p-2 border-pink-700 rounded-lg'>Users</Link>
      <Link to="/products" className='border-2 p-2 border-pink-700 rounded-lg'>Products</Link>
    </nav>
    <hr />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
    </Routes>
      </div>
    </>
  )
}

export default App;


// // import { useState } from 'react';
// import './App.css'
// // import {userList} from "/src/userList.js";
// import { useDispatch, useSelector } from "react-redux";
// import { userDelete } from './reducer/userReducer';

// function App() {
//   // const [users, setUsers] = useState(userList);

//   const { users } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   const deleteHandler = (index) => {
//     // console.log(index);
//     dispatch(userDelete(index))
    
//   };

//   return (
//     <>
//     <div className='m-auto container p-10 mt-5 bg-red-100'>
//       <h1 className='text-2xl font-bold text-red-900'>User List</h1>
//       <ul>
//         {
//           users.map((user, index) => {
//             return (
//               <li key={user.id}>
//                 <h1>{user.name} <span onClick={() => deleteHandler(index)} className='text-red-500 font-black cursor-pointer'>X</span></h1>
//               </li>
//             );
//           })
//         }
//       </ul>
//     </div>
//     </>
//   )
// }

// export default App;
