const express = require("express");
const userModel = require("../auth/auth-model");


const router = express.Router();

router.get("/users", (req, res, next) => {
    userModel.findAll()
        .then(users => res.status(200).json(users))
        .catch( err => next(err) )
})

module.exports = router;