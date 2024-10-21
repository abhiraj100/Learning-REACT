import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
};

export const counterSlice = createSlice({
    name : "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            console.log(action);
            state.value -= action.payload;
        },
        multiplyByAmount: (state, action) => {
            console.log(action);
            state.value *= action.payload;
        }
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, multiplyByAmount } = counterSlice.actions;

// for asynchronous operations
export const multiplyAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(multiplyByAmount(amount));
    }, 2000);
}

export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value : 0
// };

// export const counterSlice = createSlice({
//     name : "counter",
//     initialState: initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//         incrementByAmount: (state, action) => {
//             console.log(action);
//             state.value += action.payload;
//         },
//         decrementByAmount: (state, action) => {
//             console.log(action);
//             state.value -= action.payload;
//         },
//     },
// });

// export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;