// axios functionalities here
import axios from "axios";

export const login = (email, password) =>
  axios({
    url: "http://localhost:8080/login",
    method: "POST",
    data: {
      email,
      password,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        window.location = "/chat";
        return res.data.user;
      }
    })
    .catch((error) => {
      console.log(error);
    });

export const signup = ({ displayName, email, password, confirmPassword }) =>
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
        console.log(res.data.userData);
        window.location = "/login";
        return res.data.userData;
      }
    })
    .catch((error) => {
      console.log(error);
    });
