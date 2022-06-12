import styled from "styled-components";

export const StyledListBoxButton = styled.button`
    width: 18rem;
    height: 2.5rem;
    background-color: #121231;
    border: none;
    color: white;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
    text-align: start;
    padding: 0 1rem;
    font-size: 1.1rem;
`;
export const StyledListBoxOption = styled.li`
    width: 18rem;
    height: 2.5rem;
    background-color: #121231;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    &:hover { background-color: #2b2b50; }
    div { width: 1rem; height: 1rem; }
`;
export const StyledListBoxOptions = styled.ul`
    border-radius: 0.3rem;
    overflow: hidden;
    width: 18rem;
    margin-bottom: 2rem;
`;