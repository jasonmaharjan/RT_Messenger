import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { logOutStart } from "../redux/user/user.actions";
import { changeTheme } from "../redux/settings/settings.actions";
import { selectAllThemes } from "../redux/settings/settings.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  Logo,
  Links,
  StyledLink,
  Logout,
  Theme,
  ThemeSelect,
  ThemeOption,
} from "../styles/Header";
import { ThemeProvider } from "styled-components";

const Header = ({ changeTheme, allThemes, logOutStart }) => {
  const [themeClicked, SetThemeClicked] = useState(false);
  const token = localStorage.getItem("token");

  const handleThemeClick = () => {
    SetThemeClicked(!themeClicked);
  };

  const themeRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    // cleanup function
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  // close theme dropdown if clicked elsewhere
  const handleClickOutside = (event) => {
    if (!themeRef.current.contains(event.target)) SetThemeClicked(false);
  };

  const theme = {
    themeClicked: false,
  };
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <Logo>RT Messenger</Logo>
        <Links>
          <StyledLink to="/about">About</StyledLink>
          <Theme ref={themeRef} value={Theme} onClick={handleThemeClick}>
            Themes
            {themeClicked ? (
              <ThemeSelect>
                {allThemes.map((theme, index) => {
                  return (
                    <ThemeOption key={index} onClick={() => changeTheme(theme)}>
                      {theme.name}
                    </ThemeOption>
                  );
                })}
              </ThemeSelect>
            ) : null}
          </Theme>

          {!token ? <StyledLink to="/signup">Signup</StyledLink> : null}
          {token ? <StyledLink to="/chat">Chat</StyledLink> : null}
          {!token ? (
            <StyledLink to="/login">Login</StyledLink>
          ) : (
            <Logout onClick={logOutStart}> Logout</Logout>
          )}
        </Links>
      </HeaderContainer>
    </ThemeProvider>
  );
};

const MapStateToProps = createStructuredSelector({
  allThemes: selectAllThemes,
});

const MapDispatchToProps = (dispatch) => ({
  changeTheme: (theme) => dispatch(changeTheme(theme)),
  logOutStart: () => dispatch(logOutStart()),
});
export default connect(MapStateToProps, MapDispatchToProps)(Header);
