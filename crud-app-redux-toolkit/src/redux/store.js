import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice.js";

export const store = configureStore({
    reducer: {
        users : UserReducer,
    },
    devTools: true,
});