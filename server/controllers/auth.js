const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Server = require("../models/server");
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
                        const jwtSecret = process.env.JWT_SECRET;

                        const token = jwt.sign({ email, userId: user._id.toString() }, jwtSecret, { expiresIn: "8h" });

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
    const userId = req.userId;

    Server.find({ "users.userId": userId })
        .then((servers) => {
            return res.status(200).json({
                servers,
            });
        })
        .catch((err) => console.log(err));
};

exports.postServers = (req, res, next) => {
    const userId = req.userId;
    const serverName = req.body.serverName;
    const serverImageURL = req.body.serverImageURL;

    const errors = validationResult(req);
    console.log(errors);

    // error handler
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errorMessage: errors.array()[0].msg,
        });
    }

    // create new server
    const server = new Server({
        serverName,
        serverImageURL,
        adminId: userId,
        users: [{ userId }],
    });

    server
        .save()
        .then((server) => {
            const serverId = server._id;
            User.findOne({ _id: userId })
                .then((user) => {
                    user.servers.push({ serverId });
                    user.save()
                        .then(() => {
                            return res.status(201).json({
                                serverData: server,
                            });
                        })
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
};

exports.arrangeServers = (req, res, next) => {
    const userId = req.userId;
    const sourceItem = req.body.sourceItem;
    const source = req.body.source;
    const destination = req.body.destination;

    User.findOne({ _id: userId })
        .then((user) => {
            user.servers.splice(source.index, 1);

            User.findOne({ "servers.serverId": sourceItem._id })
                .then((result) => {
                    user.servers.splice(destination.index, 0, result.servers[source.index]);
                    user.save()
                        .then((result) => {
                            res.status(200).json({
                                newServerList: result.servers,
                            });
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
