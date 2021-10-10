import styled from "styled-components";

export const ServerName = styled.div`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-row: 1 / 2;
  font-size: 1.1rem;
  border-bottom: 1px solid var(--primary);
`;

export const ChatRoomList = styled.div`
  padding: 1.5rem;
  grid-row: 2 /3;
  list-style-type: none;
`;

export const ChatRoomEntry = styled.li`
  height: 3rem;
  margin-bottom: 1rem;
  border-radius: 50%;
`;

export const ChatRoomBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  padding: 0 4rem 0 0.5rem;
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  color: var(--grey-light);
  border-radius: 0.5rem;
  outline-style: none;
  transition: all 0.2s;

  &:hover {
    background-color: #1c1b2193;
    cursor: pointer;
  }

  &:focus {
    background-color: #1c1b2193;
  }
`;

export const UserRow = styled.div`
  grid-row: 3 / 4;
  min-height: 3rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  padding: 0 2rem;
  background-color: #1c1b2193;
  font-family: inherit;
  font-size: 1rem;
  color: var(--grey-light);
`;

export const UserName = styled.span`
  color: var(--primary);
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const UserStatus = styled.span`
  align-self: center;
  justify-self: flex-end;
  grid-column: 3 / 4;
  margin-right: auto;
  height: 0.5rem;
  width: 0.5rem;
  background-color: var(--green);
  border-radius: 50%;
`;
