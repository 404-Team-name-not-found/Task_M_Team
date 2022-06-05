import React, { useRef, useState } from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledRecaptchaContainer } from './Form.styled';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../Button/Button';

export default function Form() {
    const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA;
    const recaptchaRef = useRef();
    const [isChecked, setIsChecked] = useState(false);

    const handleCaptchaCahnge = () => {
        setIsChecked(recaptchaRef.current.getValue());
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
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_KEY}
                    onChange={handleCaptchaCahnge}
                    theme="dark"
                />
            </StyledRecaptchaContainer>
            <Button
                disabled={!isChecked}
                width={12}
                height={2}
            >
                Submit
            </Button>
        </StyledForm>
    )
};
