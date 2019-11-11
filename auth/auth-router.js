const express = require("express");
const bodyValidator = require("../middleware/bodyValidator");
const userValidator = require("../middleware/userValidator");


const router = express.Router();

router.post("/login", bodyValidator(["username", "password"]), userValidator, (req, res, next) => {
    console.log(req.body);
})

module.exports = router;