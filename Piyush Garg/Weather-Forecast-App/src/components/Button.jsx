import React from 'react';

const Button = (props) => {
    return (
        <div className='Button'>
            <button className='btn' onClick={props.onClick}>{props.value}</button>
        </div>
    )
}

export default Button;