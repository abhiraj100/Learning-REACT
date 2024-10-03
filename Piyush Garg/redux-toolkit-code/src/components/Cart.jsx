import React from 'react';
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartSlice"

const Cart = () => {
    // const items = useSelector(state => state);
    const items = useSelector(getItemSelector);
    console.log("Items", items);

    // const total = items.cart.reduce((a, b) => a + b.price, 0);
    const total = items.reduce((a, b) => a + b.price, 0);
    

    return (
        <>
            <div className='alert-alert-success'>
                {/* <h3 className='text-center'>Total Items: {items.cart.length} (Rs. {total})</h3> */}
                <h3 className='text-center'>Total Items: {items.length} (Rs. {total})</h3>
            </div>
        </>
    )
}

export default Cart;