import React from 'react'
import Accordion from './Accordion';
import data from "../data.json";

const Faq = () => {
  return (
    <div style={{ padding: "20px 40px"}}>
      <h1 style={{ textAlign: "center"}}>FAQ's</h1>
      {
        data.faqs.map((item, index) => {
            return <Accordion  key={index} qna={item} isOpen={ index === 0} />;
        })
      }
    </div>
  )
}

export default Faq
