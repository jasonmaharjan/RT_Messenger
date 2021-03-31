import React, { useState } from "react";
import { connect } from "react-redux";
import { logInStart } from "../../redux/user/user.actions";

import FormInput from "../../components/formInput/formInput.component";
import Button from "../../components/button/button.component";

import "./login.styles.scss";

const Login = ({ logInStart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.log("Login form fill up");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    const emailAndPassword = {
      email,
      password,
    };
    logInStart(emailAndPassword);
  };

  return (
    <section className="content">
      <span className="title">Login</span>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          handleChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          handleChange={handleChange}
          required
        />

        <Button title="Login" handleClick={handleClick} />
      </form>

      <span className="text">
        {" "}
        Don't have an account? Sign up{" "}
        <a href="/signup" className="text-p-highlight">
          here
        </a>
      </span>
    </section>
  );
};

const MapDispatchToProps = (dispatch) => ({
  logInStart: (emailAndPassword) => dispatch(logInStart(emailAndPassword)),
});

export default connect(null, MapDispatchToProps)(Login);
