import styled, { css } from "styled-components";

const skeleton = css`
  opacity: 0.8;
  animation: skeletonLoading 0.8s linear infinite alternate;

  @keyframes skeletonLoading {
    0% {
      background-color: var(--hsl-light);
    }

    100% {
      background-color: var(--hsl-dark);
    }
  }
`;

export const MembersTitle = styled.div`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / 2;
  font-size: 1.1rem;
  border-bottom: 1px solid var(--primary);
  position: relative;
`;

export const MembersContainer = styled.div`
  padding: 1.5rem;
  grid-row: 2 / 3;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MembersList = styled.ul`
  list-style: none;
  width: 100%;
`;

export const MembersListContainer = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const MembersImage = styled.span`
  grid-column: 1 / 2;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 50%;
  background: url("https://cutewallpaper.org/21/overlord-albedo-wallpaper-hd/Wallpaper-sake-girl-Overlord-horns-anime-brunette-.jpg");
  opacity: ${(props) => (props.status === "online" ? 1 : 0.5)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const MembersStatus = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0;
  height: 0.75rem;
  width: 0.75rem;
  border: 2px solid white;
  background-color: ${(props) =>
    props.status === "online" ? `var(--green);` : `grey`};
  border-radius: 50%;
`;

export const MembersName = styled.li`
  align-self: center;
  justify-self: flex-start;
  grid-column: 2 / 3;
  font-size: 0.75rem;
  color: ${(props) => (props.status === "online" ? `inherit` : `grey`)};
`;

export const SkeletonMembersName = styled.li`
  ${skeleton};
  height: 0.75rem;
  width: 3rem;
  border-radius: 0.25rem;
  align-self: center;
  justify-self: flex-start;
  grid-column: 2 / 3;
`;

export const SkeletonMembersImage = styled.div`
  ${skeleton};
  grid-column: 1 / 2;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 50%;
`;
