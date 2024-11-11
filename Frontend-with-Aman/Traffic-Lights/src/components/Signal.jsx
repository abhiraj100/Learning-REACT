import React from 'react'

const Signal = ({color, isActive}) => {
  return (
    <div className='signal' style={{ backgroundColor: `${isActive ? color : "gray"}`, margin: "5px"}}>
      
    </div>
  )
}

export default Signal;
