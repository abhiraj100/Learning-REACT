import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

const Otp = ({ otpLength = 6 }) => {
    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
    // console.log(otpFields);
    const ref = useRef([]);
    console.log(ref);
    

    const handleKeyDown = (e, index) => {
        e.preventDefault();
        // console.log(e);
        const key = e.key;

        // check ArrowLeft and ArrowRight
        if(key === "ArrowLeft"){
            if(index > 0){
                ref.current[index - 1].focus();
            }
            return;
        }

        if(key === "ArrowRight"){
            if(index + 1 < otpFields.length){
                ref.current[index + 1].focus();
            }
            return;
        }

        const copyOtpFields = [...otpFields];

        // handle backspace key
        if(key === "Backspace"){
            // console.log("Delete Clicked");
            copyOtpFields[index] = "";
            setOtpFields(copyOtpFields);
            if(index > 0){
                ref.current[index - 1].focus();
            }
            return;
            
        }
        // handle on click key
        console.log(key);
        if(isNaN(key)){
            return;
        }
        // const copyOtpFields = [...otpFields];
        copyOtpFields[index] = key;
        if(index + 1 < otpFields.length){
            ref.current[index + 1].focus();
        }
        setOtpFields(copyOtpFields);
    }

    useEffect(() => {
        ref.current["0"].focus();
    }, [])
    
  return (
    <div className='container'>
      {
        otpFields.map((value, index) => {
            return <input key={index} ref={(currentInput) => ref.current[index] = currentInput} type='text' value={value} onKeyDown={(e) => handleKeyDown(e, index)} aria-label={`OTP digit ${index + 1}`}  maxLength="1"  />
        })
      }
    </div>
  )
}

export default Otp;
