import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25rem; 
    height: 30rem;
    padding: 2rem 2rem;
    border-radius: 0.3rem;
    background-color: #121231;
    color: white;

    h2 {
        margin-bottom: 2.5rem;
    }
`;

export const StyledLabel = styled.label`
    width: 100%;
    text-align: start;
    font-weight: 600;
    display: block;
    margin: 0.5rem 0;
` ;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #21213E;
    border: none;
    color: white;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
`

export const StyledRecaptchaContainer = styled.div`
    margin: 1rem 0 2rem 0;
`;
