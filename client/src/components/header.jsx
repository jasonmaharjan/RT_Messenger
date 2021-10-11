import React from "react";
import { connect } from "react-redux";
import { logOutStart } from "../redux/user/user.actions";
import {
  HeaderContainer,
  Logo,
  Links,
  StyledLink,
  Logout,
} from "../styles/Header";

const Header = ({ logOutStart }) => {
  const token = localStorage.getItem("token");
  return (
    <>
      <HeaderContainer>
        <Logo>RT Messenger</Logo>
        <Links>
          <StyledLink to="/about">About</StyledLink>
          {!token ? <StyledLink to="/signup">Signup</StyledLink> : null}
          {token ? <StyledLink to="/chat">Chat</StyledLink> : null}
          {!token ? (
            <StyledLink to="/login">Login</StyledLink>
          ) : (
            <Logout onClick={logOutStart}> Logout</Logout>
          )}
        </Links>
      </HeaderContainer>
    </>
  );
};

const MapDispatchToProps = (dispatch) => ({
  logOutStart: () => dispatch(logOutStart()),
});
export default connect(null, MapDispatchToProps)(Header);
