import React, { useState } from "react";

import { connect } from "react-redux";
import { signUpStart, resetError } from "../redux/user/user.actions";
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

const SignUp = ({ signUpStart, error, resetError }) => {
  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
    password: "",
    setPassword: "",
  });

  const handleChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    signUpStart(formValues);
    if (error) {
      toast.error(`${error}`, { autoClose: 3000 });
      resetError();
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
          value={formValues.displayName}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          value={formValues.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          value={formValues.password}
          placeholder="Password"
          handleChange={handleChange}
          required
        />

        <FormInput
          name="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
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
  resetError: () => dispatch(resetError()),
});

export default connect(MapStateToProps, MapDispatchToProps)(SignUp);
