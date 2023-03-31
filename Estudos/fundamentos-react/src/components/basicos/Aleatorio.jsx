import React from 'react';

export default (props) => {
    const min = props.min;
    const max = props.max;
    const rand = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <span><p>{ min } - {max}</p></span>
            <h2>{ rand }</h2>
        </div>
    )
}