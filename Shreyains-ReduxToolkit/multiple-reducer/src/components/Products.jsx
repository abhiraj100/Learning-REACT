import React, { useEffect } from 'react';
import { getProducts } from '../reducer/productReducer';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetProducts } from '../actions/ProductAction';

const Products = () => {
    const {products} = useSelector((state) => state.products)
    console.log(products)
    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(getProducts())
        // asyncGetProducts();

        // to call the arrow function/ (which becomes actions) we have to dispatch the normal function
        dispatch(asyncGetProducts());
    }, []);

  return (
    <>
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>Product List</h1>
      <ul>
        {
         products && products.map((product) => {
            return (
              <li key={product.id}>
                <h1>{product.title} </h1>
              </li>
            );
          })
        }
      </ul>
    </div>
    </>
  )
}

export default Products