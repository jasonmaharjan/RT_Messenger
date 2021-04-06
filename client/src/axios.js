// axios functionalities here
import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export const login = (email, password) =>
  axios({
    url: BASE_URL + "login",
    method: "POST",
    data: {
      email,
      password,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("userId", res.data.user._id.toString());

        // initiate auto logout
        window.location = "/chat";
        return res.data.user;
      }
    })
    .catch((error) => {
      console.log(error);
    });

export const signup = ({ displayName, email, password, confirmPassword }) =>
  axios({
    url: BASE_URL + "signup",
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

export const logout = (token) =>
  axios({
    url: BASE_URL + "logout",
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        // remove token from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location = "/login";
      }
    })
    .catch((error) => console.log(error));

export const chatPage = (token) => {
  return axios({
    url: BASE_URL + "chat",
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((err) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location = "/login";
      console.log(err);
    });
};

export const getServerData = (token) => {
  return axios({
    url: BASE_URL + "servers",
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((err) => console.log(err));
};
