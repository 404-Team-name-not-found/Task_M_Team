import React from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledRecaptchaContainer } from './Form.styled';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form() {
    const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA;

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
            <StyledRecaptchaContainer>
                <ReCAPTCHA
                    sitekey={RECAPTCHA_KEY}
                    onChange={handleCaptchaCahnge}
                />
            </StyledRecaptchaContainer>
        </StyledForm>
    )
};
