import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="header-logo">Chat</div>

      <div className="header-links">
        <Link className="header-link" to="/login">
          Login
        </Link>

        <Link className="header-link" to="/register">
          Register
        </Link>

        <Link className="header-link" to="/about">
          About
        </Link>

        <Link className="header-link" to="/chat">
          Chat
        </Link>

        <Link className="header-link" to="/logout">
          Logout
        </Link>
      </div>
    </section>
  );
};

export default Header;
