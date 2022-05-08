import './Navbar.css'
import Button from './Button'


import React from 'react';

const Navbar = () => {

    return (
        <div className='nb'>
            <h3>ColmanDevClub</h3>
            <Button 
            title={"Dashboard"}
            icon={"icon"}
            />
            <Button 
            title={"Projects"}
            icon={"icon"}
            />
            <Button 
            title={"Board"}
            icon={"icon"}
            />
            <Button 
            title={"Add User"}
            icon={"icon"}
            />
            <Button 
            title={"Messages"}
            icon={"icon"}
            />
        </div>
    );
};

export default Navbar;