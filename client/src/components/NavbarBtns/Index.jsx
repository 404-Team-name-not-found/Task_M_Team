import "./NavbarBtns.css"
import React from 'react';
import { useState } from "react";


const Index = props => {
    const [style, setStyle] = useState("button");

    const setActive = () => {
        setStyle("button active")
    }

    return (
        <div className={style} onClick={()=>{props.onClick(props.title);setActive()}}>
            <div className={"icon " + props.icon+"-icon"}></div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Index;