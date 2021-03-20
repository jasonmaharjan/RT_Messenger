const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");

const User = require("../models/user");

const authController = require("../controllers/auth");

router.get("/", (req, res, next) => {
  res.redirect("/login");
});

// login
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// signup
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
