const express = require("express");

server = express();

server.get("/", (req, res) => {
    res.send("We're in boyz!")
})

module.exports = server;