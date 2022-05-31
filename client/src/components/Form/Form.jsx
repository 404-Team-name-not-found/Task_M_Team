import React from 'react';
import { StyledForm, StyledInput, StyledLabel } from './Form.styled';

export default function Form() {
  return (
    <StyledForm action='/'>
        <h2>Login</h2>
        <StyledLabel htmlFor="username">Username:</StyledLabel>
        <StyledInput type="text" id="username" placeholder="Enter username..." required />
        <StyledLabel htmlFor="password">Username:</StyledLabel>
        <StyledInput type="password" id="password" placeholder="Enter password..." required />
    </StyledForm>
  )
}
