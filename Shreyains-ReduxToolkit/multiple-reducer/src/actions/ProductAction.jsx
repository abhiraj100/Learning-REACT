import axios from "axios";
import { getProducts } from "../reducer/productReducer";

// to call the getProducts function we have to make HOF

export const asyncGetProducts = () => async(dispatch, getState) => {
    console.log(getState());  // it gives us current global state
    
    try{
        const response = await axios.get("https://fakestoreapi.com/products");
        // here we have data of products that is sync data
        console.log(response.data);
        // getProducts(response.data);
        dispatch(getProducts(response.data));  // we are going to call normal functions so here it requires dispatch -> to call the action we have to dispatch the function
    } catch (error) {
        console.log("Error",error);
    }
}



// HOF

// function a() {
//     return function b(){};
// }

// () => () => {};