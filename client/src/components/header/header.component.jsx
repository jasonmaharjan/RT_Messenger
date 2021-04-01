import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

const Header = ({ currentUser, logOutStart }) => {
  return (
    <section className="header">
      <div className="header-logo">Chat</div>

      <div className="header-links">
        <Link className="header-link" to="/about">
          About
        </Link>

        {!currentUser ? (
          <Link className="header-link" to="/signup">
            Signup
          </Link>
        ) : null}

        {currentUser ? (
          <Link className="header-link" to="/chat">
            Chat
          </Link>
        ) : null}

        {!currentUser ? (
          <Link className="header-link" to="/login">
            Login
          </Link>
        ) : (
          <span className="header-link" onClick={logOutStart}>
            {" "}
            Logout
          </span>
        )}
      </div>
    </section>
  );
};

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const MapDispatchToProps = (dispatch) => ({
  logOutStart: () => dispatch(logOutStart()),
});
export default connect(MapStateToProps, MapDispatchToProps)(Header);
