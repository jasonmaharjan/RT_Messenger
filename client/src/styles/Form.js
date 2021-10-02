import styled from "styled-components";

export const Form = styled.form`
  margin: 1rem;
`;

export const FormGroup = styled.div`
  padding: 1.25rem;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--grey-darker);
  width: 20vw;
  height: 0.9rem;
  font-weight: 700;
  border-radius: 0.5rem;
  border: none;
  padding: 1.25rem 1rem;
  background-color: var(--grey-light);
  outline: none;

  &::-webkit-input-placeholder {
    font-family: inherit;
    font-weight: 400;
    color: var(--grey-m);
    font-size: 1rem;
  }

  &::-moz-placeholder {
    font-family: inherit;
    font-weight: 700;
    color: var(--grey-m);
    font-size: 1rem;
  }
`;
