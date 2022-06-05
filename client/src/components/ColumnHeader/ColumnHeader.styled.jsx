import styled from "styled-components";

export const StyledColumnHeader = styled.div`
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
  background: #21213e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const StyledIndicator = styled.div`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  background-color: ${({ color }) => color};
`;
export const StyledTitle = styled.input`
  border: none;
  font-size: 1.2rem;
  width: 10rem;
  background: none;
  color: white;
  text-align: center;
`;
export const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #121231;
  color: white;
  padding: 0.1rem;
  height: 2.5rem;
  width: 2.5rem;
`;
