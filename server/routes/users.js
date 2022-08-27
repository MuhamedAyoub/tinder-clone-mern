const getUsers = require("../controulers/users").getUsers;
const express = require("express");

const router = express.Router();
router.get("/users", getUsers);

module.exports.router = router;
