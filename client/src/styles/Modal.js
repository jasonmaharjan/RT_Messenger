import styled from "styled-components";

export const Modal = styled.form`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.69);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: var(--highlight);
  width: auto;
  padding: 4rem 6rem;
  border-radius: 0.5rem;
  position: relative;
`;

export const ModalHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--grey-darker);
`;

export const ModalCloseBtn = styled.span`
  position: absolute;
  font-size: 1.25rem;
  top: 2rem;
  right: 2rem;
  color: var(--primary);
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export const ModalInput = styled.div`
  margin: 1rem 0rem;
`;
