import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../auth'

const LandingPage = props => {
    let navigate = useNavigate();
    return (
        <div>
            <center>Welcome To Task_M_Team</center>
            <button onClick={
                ()=> {
                    auth.login(()=>{
                        navigate("/app")
                    })
                }}
                >
                Login</button>
        </div>
    );
};

export default LandingPage;