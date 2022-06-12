import './Navbar.css'
import Button from '../NavbarBtns/Index'
import buttons from '../../Data/NavbarBtnsData';
import { useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { NavLink , useNavigate } from 'react-router-dom';
import auth from '../../auth'


const Navbar = props => {
    const [data, setData] = useState(buttons)
    let navigate = useNavigate();


    return (
            <div className='nb'>
            <h3>ColmanDevClub</h3>
            {
                data.map(button => (
                    <NavLink to={"/"+button.icon}>
                    <Button
                    key={uuidv4()}
                    content={button}
                    /> 
                    </NavLink>
                ))
            }
            <button onClick={()=> {
                    auth.logout(()=>{
                        navigate("/")
                    })
                }}
                >
                Login</button>
        </div>
    );
};

export default Navbar;