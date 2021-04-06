const jwt = require("jsonwebtoken");
const fs = require("fs");
const User = require("../models/user");

module.exports = (req, res, next) => {
  // check for authorization header
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    // error.statusCode(401); throw error;
    console.log("Not authenticated");
  }

  const token = authHeader.split(" ")[1];
  const jwt_secret = fs.readFileSync("jwt_secret.txt", "utf-8").toString();

  try {
    const decodedToken = jwt.verify(token, jwt_secret);
    const user = User.findOne({ _id: decodedToken.userId, token });

    if (!decodedToken) {
      // error.statusCode = 401; throw Error;
    } else if (!user) {
      // throw new Error
      console.log("Invalid Token");
    }

    req.userId = decodedToken.userId; // use the user ID extracted from decoded token!
    req.token = token;
    next();
  } catch (error) {
    // error.statusCode = 500;
    res.status(400).json({
      message: "Token Expired",
    });
    console.log(error);
  }
};
