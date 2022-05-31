import React from 'react';
import { StyledForm, StyledInput, StyledLabel } from './Form.styled';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form() {
    const handleCaptchaCahnge = (e) => {
        console.log(e)
    }
    return (
        <StyledForm action='/'>
            <h2>Login</h2>
            <StyledLabel htmlFor="username">Username:</StyledLabel>
            <StyledInput type="text" id="username" placeholder="Enter username..." required />
            <StyledLabel htmlFor="password">Password:</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Enter password..." required />
            <ReCAPTCHA 
                sitekey={process.env.RECAPTCHA_V2_KEY_FRONT}
                onChange={handleCaptchaCahnge}
            />
        </StyledForm>
    )
}
