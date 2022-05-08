import './Navbar.css'
import Button from './Button'
import buttons from './buttons';
import { useState } from 'react';

import React from 'react';

const Navbar = () => {
    const [data, setData] = useState(buttons)

    return (
        <div className='nb'>
            <h3>ColmanDevClub</h3>
            {
                data.map(button => (
                    <Button
                    title={button.title}
                    icon={button.icon}
                    />
                ))
            }
        </div>
    );
};

export default Navbar;