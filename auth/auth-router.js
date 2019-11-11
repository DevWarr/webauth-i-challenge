const express = require("express");
const bodyValidator = require("../middleware/bodyValidator");
const userValidator = require("../middleware/userValidator");
const userModel = require("./auth-model");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", bodyValidator(["username", "password"]), userValidator, (req, res, next) => {
    const user = res.locals.valid;
    userModel.findByUsername(user.username)
        .then(DBuser => {
            if (DBuser && bcrypt.compareSync(user.password, DBuser.password)) {
                req.session.user = DBuser;
                res.status(200).json({ message: "Welcome, " + DBuser.username + "!" })
            } else next({ status:401, details: "Invalid Credentials >.>" })
        })
        .catch(err => {
            if (err.status) next(err)
            else next({ devMessage: err.toString() })
        })
})

router.post("/register", bodyValidator(["username", "password"]), userValidator, (req, res, next) => {
    const user = res.locals.valid;
    user.password = bcrypt.hashSync(user.password, 12);

    userModel.findByUsername(user.username)
        .then(user => {
            if (user) { // If a user exists, throw an error. Otherwise, keep going!
                throw { status:400, details:"There is a already a user with that username." };
            } else return;
        })
        .then( () => userModel.insert(user) )
        .then( id => userModel.findById( id[0] ) )
        .then( user => res.status(201).json(user) )
        .catch(err => {
            if (err.status) next(err)
            else next({ devMessage: err.toString() })
        })
})

module.exports = router;