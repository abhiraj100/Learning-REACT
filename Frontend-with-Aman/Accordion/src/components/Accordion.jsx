import React from 'react';
import "../App.css"
import { useState } from 'react';

const Accordion = ({qna, isOpen}) => {
    const [show, setShow] = useState(isOpen);
  return (
    <div className='accordion'>
      <h3>{qna.question} <span onClick={() => setShow(!show)}>{ show ? "-" : "+ "}</span></h3>
      {
        show ? (<p>{qna.answer}</p>) : (<></>)
      }
    </div>
  )
}

export default Accordion
