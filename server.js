const express = require("express");
const helmet = require("helmet");

const errorHandler = require("./middleware/errorHandler");
const authRouter = require("./auth/auth-router");

server = express();
server.use(helmet());
server.use(express.json());

server.use("/auth", authRouter);
// server.use("/api", restrictTestRouter);
server.get("/", (req, res) => {
    res.send("We're in boyz!")
})

server.use("/", (req, res, next) => next({ status: 404, details: "This endpoint doesn't exist!" }));
server.use(errorHandler);

module.exports = server;