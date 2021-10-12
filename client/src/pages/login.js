import React, { useState } from "react";
import { connect } from "react-redux";
import { logInStart } from "../redux/user/user.actions";

import FormInput from "../components/formInput";
import Button from "../components/button/button.component";

import { LoginContainer } from "../styles/Container";
import { Form } from "../styles/Form";
import { Heading, Text, HrefLink } from "../styles/Text";

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
    <LoginContainer>
      <Heading>Login</Heading>

      <Form onSubmit={handleSubmit}>
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
      </Form>

      <Button title="Login" handleClick={handleClick} />
      <Text>
        {" "}
        Don't have an account? Sign up <HrefLink href="/signup">here</HrefLink>
      </Text>
    </LoginContainer>
  );
};

const MapDispatchToProps = (dispatch) => ({
  logInStart: (emailAndPassword) => dispatch(logInStart(emailAndPassword)),
});

export default connect(null, MapDispatchToProps)(Login);
