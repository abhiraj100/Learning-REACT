import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Mounted
    // const timer = setTimeout(() => setTime(time + 1), 1000);

    console.log("Adding new Interval");
    
    const timer = setInterval(() => setTime(time + 1), 1000);
    
    return function (){
        console.log("clear last Interval");
        clearTimeout(timer)
    }
  }, [time]);

  return (
    <>
      <h1>StopWatch</h1>
      <p>Current Time is {time}</p>
    </>
  );
};

export default Timer;
