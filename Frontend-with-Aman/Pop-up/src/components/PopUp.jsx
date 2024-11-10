import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PopUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {

  }, [show])

  return (
    <>
      {" "}
      <div>
        {" "}
        <button
          onClick={() => setShow(!show)}
          className="border-2 z-50 bg-black border-white text-black flex justify-center items-center"
        >
          on
        </button>
      </div>
      {show ? (
        <>
          <div className=" fixed inset-0 bg-black opacity-80 -z-50"></div>
          <div className=" left-[200px] z-50 top-0 w-[400px] bg-red-500 h-[400px] border-2 border-white shadow-md shadow-white absolute flex justify-center items-center">
          <div onClick={() => setShow(!show)} className="absolute cursor-pointer rounded-[100%]
           right-0 top-0 border-2 border-black shadow-lg px-2 mt-2 mr-2">X</div>
            <form>
              <label htmlFor="name">Name : </label>
              <input type="text" id="name" placeholder="Enter your name" />
            </form>
          </div>
        </>
      ):<></>}
    </>
  );
};

export default PopUp;
