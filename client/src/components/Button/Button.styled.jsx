import styled, {css} from "styled-components";

export const StyledButton = styled.button`
    border: 1px solid white;
    border-radius: 0.3rem;
    width: ${({width}) => width}rem;
    height: ${({height}) => height}rem;
    background-color:  #21213E;
    color: white;
    font-size: 1rem;
    padding: 0.2rem;
    
    &:hover {
        background-color: #212151
    }

    ${({disabled}) => {
        if (disabled) {
            return css`
                &:hover {
                    cursor: not-allowed; 
                }
                opacity: 0.5;
            `
        }
    }}
`