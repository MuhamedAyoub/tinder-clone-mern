const express = require("express");
const { postLogin, postSignUp } = require("../controulers/auth");
const router = express.Router();

router.post("/login", postLogin);
router.post("/signup", postSignUp);
module.exports.router = router;
