import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header.component";
import Login from "./pages/login.component";
import SignUp from "./pages/signup.component";
import About from "./pages/about.component";
import ChatPage from "./pages/chatpage/chatpage.component";

import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Redirect exact from="/" to="/about" />

        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
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
      </Switch>
    </>
  );
};

export default App;
