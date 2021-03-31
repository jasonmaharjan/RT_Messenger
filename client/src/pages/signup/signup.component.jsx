import React, { useState } from "react";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../../components/formInput/formInput.component";
import Button from "../../components/button/button.component";

import "./signup.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        console.log("Login form fill up");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    const signUpData = { displayName, email, password, confirmPassword };
    signUpStart(signUpData);
  };

  return (
    <section className="content">
      <span className="title">Sign Up</span>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="string"
          placeholder="Display Name"
          value={displayName}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          value={email}
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

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          handleChange={handleChange}
          required
        />
      </form>

      <Button title="Sign Up" handleClick={handleClick} />

      <span className="text">
        {" "}
        Already have an account? Sign in{" "}
        <a href="/login" className="text-p-highlight">
          here
        </a>
      </span>
    </section>
  );
};

const MapDispatchToProps = (dispatch) => ({
  signUpStart: (signUpData) => dispatch(signUpStart(signUpData)),
});

export default connect(null, MapDispatchToProps)(SignUp);
