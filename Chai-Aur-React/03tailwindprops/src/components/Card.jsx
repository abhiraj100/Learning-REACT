import React from 'react'

// function Card() {}  // we can use it instead of arrow function
const Card = (props) => {
// const Card = ({username, btnText="View Profile"}) => {  // directly use it
// console.log(username);

    // console.log("props", props);
    console.log(props.username);

    let username = props.username;
    let btnText = props.btnText;

  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
        "The only way to do great work is to love what you do." - Steve Jobs
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black">
          {btnText  || "View Profile" } &rarr;
        </button>
      </div>
    </div>
    </>
  )
}

export default Card;
