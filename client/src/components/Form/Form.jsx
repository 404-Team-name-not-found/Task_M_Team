import React, { useRef, useState, useEffect } from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledRecaptchaContainer, StyledError } from './Form.styled';
import { usernameFilter } from '../../Regex';
import formValidation from './FormValidation';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../Button/Button';
import { setErrorsQueue, defaultErrors } from './formErrors';

export default function Form({ variant }) {
    const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA;
    const recaptchaRef = useRef();
    const [submit, setSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setReapeatPassword] = useState("");
    const [errors, setErrors] = useState(defaultErrors);
    const [errorsDisplay, setErrorsDisplay] = useState();

    const handleCaptchaChange = (state) => { setIsChecked(state); }
    const handleUsername = event => { setUsername(event.target.value.replace(usernameFilter, "").slice(0, 16)); }
    const handleEmail = event => { setEmail(event.target.value); }
    const handlePassword = event => { setPassword(event.target.value); }
    const handleRepeatPassword = event => { setReapeatPassword(event.target.value); }

    useEffect(() => {
        setErrors(setErrorsQueue(formValidation(username, email, password, repeatPassword, isChecked, errors)));
        setSubmit(errors.status);
    }, [username, email, password, repeatPassword, isChecked]);


    if (variant === "login") return (
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
                  onChange={e => { handleCaptchaChange(true); }}
                  theme={"dark"}
                  onExpired={e => { handleCaptchaChange(false); }}
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
    );
    if (variant === "signup") return (
        <StyledForm action='/'>
            <h2>Sign Up</h2>
            <StyledLabel htmlFor="username">Username:</StyledLabel>
            <StyledInput type="text" id="username" value={username} onChange={handleUsername} placeholder="Enter username..." required />
            <StyledError>{errors.username.getFirst()}</StyledError>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput type="email" id="email" onChange={handleEmail} placeholder="Enter Email..." required />
            <StyledError>{errors.email.getFirst()}</StyledError>
            <StyledLabel htmlFor="password">Password:</StyledLabel>
            <StyledInput type="password" id="password" onChange={handlePassword} placeholder="Enter password..." required />
            <StyledError>{errors.password.getFirst()}</StyledError>
            <StyledLabel htmlFor="password">Repeat Password:</StyledLabel>
            <StyledInput type="password" id="password" onChange={handleRepeatPassword} placeholder="Enter password..." required />
            <StyledError>{errors.repeatPassword.getFirst()}</StyledError>
            <StyledRecaptchaContainer>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_KEY}
                    onChange={e => { handleCaptchaChange(true); }}
                    theme={"dark"}
                    onExpired={e => { handleCaptchaChange(false); }}
                    onChange={handleCaptchaCahnge}
                    theme="dark"
                />

