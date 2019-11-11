const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const sessionConfig = require("./configs/sessionConfig");

const errorHandler = require("./middleware/errorHandler");
const authRouter = require("./auth/auth-router");
const restrictCheck = require("./middleware/restrictCheck");
const restrictTestRouter = require("./restricted/restrict-router");

server = express();
server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/auth", authRouter);
server.use("/api", restrictCheck, restrictTestRouter);
server.get("/", (req, res) => {
    res.send("We're in boyz!")
})

server.use("/", (req, res, next) => next({ status: 404, details: "This endpoint doesn't exist!" }));
server.use(errorHandler);

module.exports = server;