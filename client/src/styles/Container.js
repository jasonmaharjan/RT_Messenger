import styled, { css } from "styled-components";

const style = css`
  border-radius: 0.95rem;
  background-color: var(--grey-m-dark);
  margin: 0.5rem 10px 0;
  display: flex;
  min-height: 90vh;
  max-height: 90vh;
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
  max-height: 90vh;
  display: grid;
  grid-template-columns: [server-start]90px [server-end chatroom-start] max-content [chatroom-end chat-start] 1fr [chat-end members-start] max-content [members-end];
`;

export const ServerListContainer = styled.div`
  grid-column: server-start / server-end;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--grey-darker);
  position: relative;
`;

export const ChatRoomsContainer = styled.div`
  grid-column: chatroom-start / chatroom-end;
  background-color: var(--grey-dark);
  display: grid;
  grid-template-rows: 4rem 1fr min-content;
`;

export const ChatContainer = styled.div`
  grid-column: chat-start / chat-end;
  background-color: var(--grey-m-dark);
  display: grid;
  grid-template-rows: 4rem 1fr 3rem;
  max-height: 90vh;
`;

export const MembersContainer = styled.div`
  grid-column: members-start / members-end;
  background-color: var(--grey-dark);
  display: grid;
  grid-template-rows: 4rem 1fr;
  border-radius: 0 0.5rem 0.5rem 0;
`;
