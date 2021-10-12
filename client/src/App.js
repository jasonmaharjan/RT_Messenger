import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import ErrorBoundary from "./components/errorBoundary";

import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ChatPage from "./pages/chatpage";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { DefaultTheme, BrownTheme, PurpleTheme } from "./styles/Themes";

const App = () => {
  const [theme, setTheme] = useState(PurpleTheme);
  // useEffect(() => {
  //   // set the selected theme OR the theme stored in the local storage
  //   setTheme();
  // }, []);

  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Redirect exact from="/" to="/about" />

        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <ErrorBoundary>
          <Route
            exact
            path="/chat"
            render={() =>
              localStorage.getItem("token") ? (
                <ChatPage />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </ErrorBoundary>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
