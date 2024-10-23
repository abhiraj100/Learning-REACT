import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../UserList.js";

const userSlice = createSlice({
  name: "users",
  // initialState : {},
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.name = name; // here RHS name is coming from action.payload
        updatingUser.email = email; // here RHS email is coming from action.payload
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      const deletingUser = state.find((user) => user.id == id);
      if (deletingUser) {
        return state.filter((f) => f.id != id);
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
