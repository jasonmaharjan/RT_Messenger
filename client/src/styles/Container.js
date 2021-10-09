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

export const ChatPageContainer = styled.div`
  color: var(--grey-light);
  border-radius: 0.5rem;
  background-color: var(--grey-m-dark);
  margin: 0.5rem 10px 0;
  min-height: 90vh;
  display: flex;
  position: relative;
  //flex-wrap: wrap;
  //justify-content: center;
  // display: grid;
  // grid-template-columns:
  //     [server-start]8% [server-end
  //     chatroom-start] 22% [chatroom-end chat-start] 55% [chat-end members-start] 1fr [members-end];
`;

export const ServerListContainer = styled.div`
  width: 100px;
  //grid-column: server-start / server-end;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: $grey-darker;
  position: relative;
`;

export const ChatRoomsContainer = styled.div`
  grid-column: chatroom-start / chatroom-end;
  background-color: $grey-dark;
  display: grid;
  grid-template-rows: 5vw 1fr 4vw;
`;

export const ChatContainer = styled.div`
  grid-column: chat-start / chat-end;
  background-color: $grey-m-dark;
  display: grid;
  grid-template-rows: 5vw 1fr 4vw;
`;

export const MembersContainer = styled.div`
  grid-column: members-start / members-end;
  background-color: $grey-dark;
  display: grid;
  grid-template-rows: 5vw min-content 1fr;
  border-radius: 0 0.5rem 0.5rem 0;
`;
