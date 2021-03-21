import React, { useState } from "react";

import axios from "axios";

import FormInput from "../../components/formInput/formInput.component";
import Button from "../../components/button/button.component";

import "./signup.styles.scss";

const SignUp = () => {
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

  const handleClick = async () => {
    axios({
      url: "http://localhost:8080/signup",
      method: "POST",
      data: {
        displayName,
        email,
        password,
        confirmPassword,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          alert("New account created");
        }
        if (res.status === 422) {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

export default SignUp;
