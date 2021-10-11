import styled, { css } from "styled-components";

const skeleton = css`
  opacity: 0.8;
  animation: skeletonLoading 0.8s linear infinite alternate;

  @keyframes skeletonLoading {
    0% {
      background-color: hsl(188, 6%, 60%);
    }

    100% {
      background-color: hsl(188, 6%, 70%);
    }
  }
`;

export const ChatRoom = styled.div`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / 2;
  font-size: 1.25rem;
  border-bottom: 1px solid var(--primary);
  position: relative;
`;

export const ChatContainer = styled.ul`
  list-style: none;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: wrap;

  /* width */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--grey-m-dark);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--grey-darker);
    border-radius: 2rem;
  }
`;

export const ChatEntry = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

export const SkeletonUserImage = styled.div`
  margin-top: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  padding: 1rem;
  border-radius: 50%;
  ${skeleton};
`;

export const UserImage = styled.div`
  margin-top: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  padding: 1rem;
  border-radius: 50%;
  background: url("https://lh3.googleusercontent.com/proxy/b46jPrVLsYi-twhmaGUbIeAN5OwOGqJCWowRB7xMKOEOhUCXOBYS3by9CYCYHmyYqwbgW-A5VJRqUvLTK2Zt3evvicjCYt6uM7plwU6wooO9ysRiJeYpVRQdV882-bvx0tEItcaNrKI");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ChatEntryContent = styled.div`
  padding: 0 1rem 0 0.75rem;
  width: 100%;
`;

export const SkeletonDisplayName = styled.div`
  ${skeleton};
  height: 0.75rem;
  width: 4rem;
  border-radius: 0.25rem;
  text-align: left;
  font-size: 1rem;
`;

export const DisplayName = styled.div`
  color: var(--primary);
  text-align: left;
  font-size: 1rem;
`;

export const SkeletonChatMessage = styled.div`
  ${skeleton};
  margin-top: 0.5rem;
  height: 0.75rem;
  width: 6vw;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

export const ChatMessage = styled.div`
  font-size: 1rem;
`;

export const MessageBox = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;

export const MessageBoxInput = styled.input`
  width: 100%;
  outline-style: none;
  border: none;
  padding: 0.5rem 1.25rem 0.25rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  color: white;
  background-color: var(--grey-dark);
  -webkit-input-placeholder {
    color: var(--grey-light);
    font-family: inherit;
  }
`;
