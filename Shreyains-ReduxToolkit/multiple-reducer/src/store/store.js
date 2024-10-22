import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducer/userReducer";
import ProductReducer from "../reducer/productReducer";

export const store = configureStore({
    reducer: {
        users : UserReducer,
        products: ProductReducer,
    },
    devTools: true,
});