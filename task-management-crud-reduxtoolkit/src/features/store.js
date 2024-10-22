import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./tastSlice";

export const store = configureStore({
    reducer: {
        tasks: TaskReducer,
    },
    devTools: true,
});