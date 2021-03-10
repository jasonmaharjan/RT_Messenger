import React, { useState } from "react";

import FormInput from "../../components/formInput/formInput.component";
import Button from "../../components/button/button.component";

import "./login.styles.scss";

const Login = () => {
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
    console.log("Button clicked");
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
        <a href="/register" className="text-p-highlight">
          here
        </a>
      </span>
    </section>
  );
};

export default Login;
