import styled, { css } from "styled-components";

const style = css`
  border-radius: 0.95rem;
  background-color: var(--grey-m-dark);
  margin: 0 5vw;
  display: flex;
  min-height: 85vh;
`;

export const AboutContainer = styled.div`
  ${style}
  justify-content: flex-start;
  padding: 5rem;
`;

export const SignUpContainer = styled.div`
  ${style}
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  ${style}
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
