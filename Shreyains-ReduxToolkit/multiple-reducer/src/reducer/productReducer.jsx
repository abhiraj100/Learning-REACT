import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState  = {
    products: [],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts : (state, action) => {
            console.log(action);
            state.products = action.payload;
        }
    },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState  = {
//     products: [],
// };

// export const productSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {
//         getProducts : (state, action) => {
//             console.log(action);
//             axios
//                 .get("https://fakestoreapi.com/products")
//                 .then((response) => {
//                     console.log(response);
//                     state.products = response.data;
//                 })
//                 .catch((error) => 
//                 console.log(error))
//         }
//     },
// });

// export const { getProducts } = productSlice.actions;

// export default productSlice.reducer;