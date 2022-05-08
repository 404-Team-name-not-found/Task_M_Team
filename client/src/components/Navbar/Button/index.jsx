import "./Buttons.css"
import React from 'react';


const index = props => {
    return (
        <div className="button">
            <div className={"icon " + props.icon}></div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default index;