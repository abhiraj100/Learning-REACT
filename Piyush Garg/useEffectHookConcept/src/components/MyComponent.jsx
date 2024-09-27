import React, { useEffect, useState } from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);


  useEffect(() => {
    console.log("MyComponent useEffect is rendering ");

    return function (){
        console.log("Unmounting.....");
    };
  }, []);

  useEffect(() => {
    console.log(count ? `Count got updated ${count}` : `Count2 got updated ${count2}`);

    return function (){
        console.log("Returning count ", count);
    }
  }, [count, count2]);


  return (
    <>
      <p>Count is {count}</p>
      <button onClick={ () => setCount(count + 1)}>Update</button>
      {/* <h2>MyComponent component is rendering here</h2> */}
      <p>Count2 is {count2}</p>
      <button onClick={ () => setCount2(count2 + 1)}>Update2</button>
    </>
  );
};

export default MyComponent;
