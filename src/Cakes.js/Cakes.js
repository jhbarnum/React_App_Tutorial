import React from 'react';

const cakes = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default cakes;