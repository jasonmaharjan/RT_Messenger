import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/signup/signup.component";
import About from "./pages/about/about.component";
import ChatPage from "./pages/chatpage/chatpage.component";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
    </div>
  );
};

export default App;
