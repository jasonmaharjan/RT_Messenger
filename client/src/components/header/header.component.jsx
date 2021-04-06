import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutStart } from "../../redux/user/user.actions";

import "./header.styles.scss";

const Header = ({ logOutStart }) => {
  const token = localStorage.getItem("token");
  return (
    <section className="header">
      <div className="header-logo">Chat</div>

      <div className="header-links">
        <Link className="header-link" to="/about">
          About
        </Link>

        {!token ? (
          <Link className="header-link" to="/signup">
            Signup
          </Link>
        ) : null}

        {token ? (
          <Link className="header-link" to="/chat">
            Chat
          </Link>
        ) : null}

        {!token ? (
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

const MapDispatchToProps = (dispatch) => ({
  logOutStart: () => dispatch(logOutStart()),
});
export default connect(null, MapDispatchToProps)(Header);
