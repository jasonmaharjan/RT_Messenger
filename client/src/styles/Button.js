import styled from "styled-components";

export const StyledButton = styled.div`
  width: max-content;
  background-color: var(--grey-darker);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--primary);
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  outline: none;
  transition: all 1s;
  border: 0.25px solid transparent;

  &:hover {
    cursor: pointer;
    border: 0.25px solid var(--primary);
  }
`;
