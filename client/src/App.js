import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Login from "./pages/login/login.component";
import Register from "./pages/register/register.component";
import About from "./pages/about/about.component";
import Chat from "./pages/chat/chat.component";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </div>
  );
};

export default App;
