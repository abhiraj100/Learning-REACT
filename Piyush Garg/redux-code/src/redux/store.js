import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
    //   if (state === 0) {
    //     return state;
    //   } else {
    //     return state - 1;
    //   }
    return state === 0 ? state : state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);

