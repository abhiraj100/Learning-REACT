import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/slices/userSlice.js";

const Home = () => {
  const users = useSelector((state) => state.users);
  // console.log(users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      <h2>CRUD APP</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +{" "}
      </Link>

      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/update/${user.id}`}
                    type="button"
                    className="btn btn-sm btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    type="button"
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
