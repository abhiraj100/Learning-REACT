import React from 'react';
import "../App.css";
import { useState, useEffect } from 'react';
import { MIN_VALUE, MAX_VALUE, INTERVAL_INCREMENT, INTERVAL_SPEED_IN_MS } from '../constant';

const ProgressBar = () => {
    const [bar, setBar] = useState(MIN_VALUE);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("setInterval running");
            setBar((prevBarValue) => {
                // if(prevBarValue >= 100){
                if(prevBarValue >= MAX_VALUE){
                    clearInterval(interval);
                    // return prevBarValue;
                }
                // return prevBarValue + 5;
                return Math.min(prevBarValue + INTERVAL_INCREMENT, MAX_VALUE);
            });
        }, INTERVAL_SPEED_IN_MS);
        return () => {
            clearInterval(interval);
        }
    }, [])
  return (
    <div className='container'>
      <div style={{ transform: `translateX(${bar - 100}%)`}} className='progress'></div>
    </div>
  )
}

export default ProgressBar;
