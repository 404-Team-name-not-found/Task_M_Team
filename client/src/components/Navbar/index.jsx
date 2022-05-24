import './Navbar.css'
import Button from '../NavbarBtns/Index'
import buttons from '../../Data/NavbarBtnsData';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom';


const Navbar = props => {
    const [data, setData] = useState(buttons)

    return (
            <div className='nb'>
            <h3>ColmanDevClub</h3>
            {
                data.map(button => (
                    <NavLink to={"/"+button.icon}>
                    <Button
                    key={uuidv4()}
                    content={button}
                    onClick={props.onClick}
                    /> 
                    </NavLink>
                ))
            }
            </div>
    );
};

export default Navbar;