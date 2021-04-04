import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { logOutStart } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/signup/signup.component";
import About from "./pages/about/about.component";
import ChatPage from "./pages/chatpage/chatpage.component";

import "./App.scss";

const App = ({ currentUser, logOutStart }) => {
  // log user out and destroy token after expiry date
  useEffect(() => {
    const currentDate = Date.now();
    const expiryDate = new Date(localStorage.getItem("expiryDate")).getTime();

    if (currentDate > expiryDate) {
      logOutStart();
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Redirect exact from="/" to="/about" />

        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/chat"
          render={() => (currentUser ? <ChatPage /> : <Redirect to="/login" />)}
        />
      </Switch>
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const MapDispatchToProps = (dispatch) => ({
  logOutStart: () => dispatch(logOutStart()),
});

export default connect(MapStateToProps, MapDispatchToProps)(App);
