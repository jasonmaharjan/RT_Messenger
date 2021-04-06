const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");

const User = require("../models/user");
const authController = require("../controllers/auth");

const isAuth = require("../middlewares/is-auth"); // middleware to check for JWT

router.get("/", (req, res, next) => {
  res.redirect("/login");
});

// login
router.get("/login", authController.getLogin);
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address")
      .normalizeEmail(),
    body("password", "Password is not valid").isLength({ min: 5 }).trim(),
  ],
  authController.postLogin
);

// signup
router.get("/signup", authController.getSignup);
router.post(
  "/signup",
  [
    body("displayName", "Please enter a display name")
      .isLength({ min: 1 })
      .trim(),

    check("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((value, { req }) => {
        // custom validator should yield true, false, thrown error or promise(waits for fulfillment)
        // express validator will detect promise rejection and store as an error
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "Email is already taken, please try a different one"
            );
          }
        });
      })
      .normalizeEmail(),

    body("password", "Password is weak: please enter at least 5 characters")
      .isLength({ min: 5 })
      .trim(),

    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords do not match!");
        }
        return true;
      }),
  ],
  authController.postSignup
);

// logout
router.post("/logout", isAuth, authController.postLogout);

// chat route
router.get("/chat", isAuth, authController.getChat);

// server route
router.get("/servers", isAuth, authController.getServers);

router.post(
  "/servers",
  [
    body("serverName", "Please enter at least 5 characters")
      .isLength({ min: 5 })
      .trim(),
  ],
  isAuth,
  authController.postServers
);

module.exports = router;
