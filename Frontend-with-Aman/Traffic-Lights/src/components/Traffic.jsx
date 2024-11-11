import React from "react";
import Signal from "./Signal";
import { useState } from "react";
import { useEffect } from "react";

const Traffic = ({ lights = ["green", "yellow", "red"] }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) => {
        return (prevActive + 1) % lights.length;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      {lights.map((color, index) => {
        return <Signal isActive={active === index} key={index} color={color} />;
      })}
    </>
  );
};

export default Traffic;
