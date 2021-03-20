import React, { useState } from "react";
import axios from "axios";

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
    axios({
      url: "http://localhost:8080/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
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

export default Login;
