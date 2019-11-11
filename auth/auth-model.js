const db = require("../configs/dbConfig");

const findAll = () =>  db("users");

const findById = user_id => db("users").where({ user_id }).first();

const findByUsername = username => db("users").where({ username }).first();

const insert = user => db("users").inserts(user, "user_id");

const verify = user => {
    return;
}


module.exports = {
    findAll,
    findById,
    findByUsername,
    insert,
    verify
}