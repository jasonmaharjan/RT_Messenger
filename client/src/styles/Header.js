import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.section`
  height: 2vh;
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: var(--grey-light);
  margin-left: 5vw;
`;

export const Links = styled.div`
  margin-right: 5vw;
  margin-left: auto;
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  color: var(--grey-light);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--grey-m);
    transform: scale(1.2);
    cursor: pointer;
  }

  &:focus {
    background-color: var(--grey-m);
    transform: scale(1.2);
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Logout = styled.span`
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  color: var(--grey-light);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--grey-m);
    transform: scale(1.2);
    cursor: pointer;
  }

  &:focus {
    background-color: var(--grey-m);
    transform: scale(1.2);
  }
`;

export const Theme = styled.span`
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  color: var(--grey-light);
  text-decoration: none;
  transition: all 0.2s;
  margin-right: 0.5rem;
  background-color: transparent;
  border: none;
  position: relative;

  &:hover {
    background-color: var(--grey-m);
    cursor: pointer;
  }

  &:focus {
    background-color: var(--grey-m);
  }
`;

export const ThemeSelect = styled.ul`
  position: absolute;
  top: 2rem;
  left: 0;
  background-color: var(--grey-m);
  border-radius: 0.25rem;
  color: white;
  z-index: 1000;
`;

export const ThemeOption = styled.li`
  padding: 0.25rem 4rem;
  margin: 0;
  list-style: none;
  border-radius: 0.25rem;
  background-color: var(--grey-m);
  color: white;
  transition: all 0.2s;

  &:hover {
    background-color: var(--highlight);
  }
`;
