const User = require("../models/user");

const { validationResult } = require("express-validator");

exports.getLogin = (req, res, next) => {
  res.status(200).json({
    message: "login",
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // check entry in database

  res.status(200).json({
    message: "login attempt",
  });
};

exports.getSignup = (req, res, next) => {
  res.status(200).json({
    message: "signup",
  });
};

exports.postSignup = (req, res, next) => {
  const displayName = req.body.displayName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // create entry in database

  res.status(201).json({
    message: "signup attempt",
  });
};
