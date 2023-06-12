import React, { useState } from "react";
import { connect } from "react-redux";
import { logInStart, resetError } from "../redux/user/user.actions";
import { selectError } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { toast } from "react-toastify";

import FormInput from "../components/formInput";
import Button from "../components/button";

import { LoginContainer } from "../styles/Container";
import { Form } from "../styles/Form";
import { Heading, Text, HrefLink } from "../styles/Text";
import { Notification } from "../styles/Notification";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ logInStart, error, resetError }) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
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
    logInStart(formValues);
    if (error) {
      toast.error(`${error}`, { autoClose: 3000 });
      resetError();
    }
  };

  return (
    <LoginContainer>
      {error ? <Notification /> : null}
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formValues.email}
          placeholder="Email"
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
      </Form>
      <Button title="Login" handleClick={handleClick} />
      <Text>
        {" "}
        Don't have an account? Sign up <HrefLink href="/signup">here</HrefLink>
      </Text>
    </LoginContainer>
  );
};

const MapStateToProps = createStructuredSelector({
  error: selectError,
});

const MapDispatchToProps = (dispatch) => ({
  logInStart: (emailAndPassword) => dispatch(logInStart(emailAndPassword)),
  resetError: () => dispatch(resetError()),
});

export default connect(MapStateToProps, MapDispatchToProps)(Login);
