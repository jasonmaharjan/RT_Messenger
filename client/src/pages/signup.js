import React, { useState } from "react";

import { connect } from "react-redux";
import { signUpStart } from "../redux/user/user.actions";
import { selectError } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { toast } from "react-toastify";

import FormInput from "../components/formInput";
import Button from "../components/button";

import { SignUpContainer } from "../styles/Container";
import { Form } from "../styles/Form";
import { Heading, Text, HrefLink } from "../styles/Text";
import { Notification } from "../styles/Notification";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ signUpStart, error }) => {
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
    if (error) {
      toast.error(`${error}`, { autoClose: 3000 });
    }
  };

  return (
    <SignUpContainer>
      {error ? <Notification /> : null}
      <Heading>Sign Up</Heading>
      <Form onSubmit={handleSubmit}>
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
      </Form>

      <Button title="Sign Up" handleClick={handleClick} />
      <Text>
        {" "}
        Already have an account? Sign in <HrefLink href="/login">here</HrefLink>
      </Text>
    </SignUpContainer>
  );
};

const MapStateToProps = createStructuredSelector({
  error: selectError,
});

const MapDispatchToProps = (dispatch) => ({
  signUpStart: (signUpData) => dispatch(signUpStart(signUpData)),
});

export default connect(MapStateToProps, MapDispatchToProps)(SignUp);
