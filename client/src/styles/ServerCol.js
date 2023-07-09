import styled from "styled-components";

export const ServersListContainer = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 1.25rem;
`;

export const Servers = styled.li`
  height: 3rem;
  width: 3rem;
  margin-bottom: 1.5rem;
  background-color: var(--grey-m-dark);
  border-radius: 50%;
  text-align: center;
  position: relative;
`;

export const ServerBtn = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: inherit;
  color: var(--grey-light);
  background-color: var(--grey-m-dark);
  border-radius: 50%;
  outline-style: none;
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: var(--primary-dark);
    cursor: pointer;
  }

  &:focus {
    background-color: var(--primary-dark);
  }
`;

export const ServerName = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
`;

export const ServerSelect = styled.div`
  position: fixed;
  height: 3rem;
  top: ${(props) => props.theme.selectedServerPosition}px;
  border-radius: 2rem;
  width: 0.15rem;
  background-color: var(--primary);
  transition: all 0.2s;
`;
