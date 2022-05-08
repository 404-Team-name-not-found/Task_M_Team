import "./Buttons.css"
import React from 'react';

const index = props => {
    return (
        <div className="button">
            <div>{props.icon}</div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default index;