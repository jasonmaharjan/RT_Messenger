const bcrypt = require("bcryptjs");
const User = require("../models/user");
const crypto = require("crypto");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

exports.getLogin = (req, res, next) => {
  res.status(200).json({
    message: "login",
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errorMessage: errors.array()[0].msg,
    });
  }

  // check entry in database
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(422).json({
          errorMessage: "Invalid email",
        });
      }

      bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (match) {
            // generate auth token using email, id and private key(JWT secret)
            const jwtSecret = fs
              .readFileSync("jwt_secret.txt", "utf-8")
              .toString();

            const token = jwt.sign(
              { email, userId: user._id.toString() },
              jwtSecret,
              { expiresIn: "8h" }
            );

            user.token = token;
            user.save();

            return res.status(200).json({
              message: "Login successful",
              user,
              redirect: "/about",
            });
          }
          return res.status(422).json({
            errorMessage: "Invalid password",
          });
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log(error);
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

  // check errors collected from express-validator for valid email
  const errors = validationResult(req);
  console.log(errors);

  // error handler
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errorMessage: errors.array()[0].msg,
    });
  }

  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      // create new user instance
      const user = new User({
        displayName,
        email,
        password: hashedPassword,
      });
      return user.save();
    })
    .then((userData) => {
      res.status(201).json({
        userData,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Internal Server error",
      });
    });
};

exports.postLogout = (req, res, next) => {
  const userId = req.userId;

  User.findOne({ _id: userId })
    .then((user) => {
      user.token = undefined;
      user.save();

      res.status(200).json({
        message: "logout successful",
      });
    })
    .catch((error) => console.log(error));
};

exports.getChat = (req, res, next) => {
  res.status(200).json({
    message: "Token is valid",
  });
};

exports.getServers = (req, res, next) => {
  res.status(200).json({
    message: "Welcome to Chat Servers!",
  });
};
