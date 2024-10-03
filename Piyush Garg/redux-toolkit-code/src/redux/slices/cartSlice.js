import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            // state = [...state, action.payload]; // this is mutating the state
            state.push(action.payload);
        },
    },
});

export const getItemSelector = createSelector(
    (state) => state.cart, 
    (state) => state
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;