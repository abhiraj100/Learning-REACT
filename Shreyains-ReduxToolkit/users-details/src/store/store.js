import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducer/userReducer";

export const store = configureStore({
    reducer: {
        users : UserReducer,
    },
    devTools: true,
});