const TOKEN_KEY = "Q70IMS@Qnjk";
const URI =
  "mongodb+srv://mohamed:gggg45@cluster0.nwi1e0p.mongodb.net/?retryWrites=true&w=majority";
const { v4: uuid4 } = require("uuid");
const bcrypt = require("bcrypt");
const MongoClient = require("mongodb").MongoClient;
const jwt = require("jsonwebtoken");
module.exports.postLogin = (req, res, next) => {};
module.exports.postSignUp = async (req, res, next) => {
  const { email, password } = req.body;
  const userId = uuid4();
  const client = new MongoClient(URI);
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await client.connect();
    const db = client.db("tinder-app");
    const dataBase = db.collection("users");
    if (dataBase.find({ email })) {
      res
        .status(409)
        .send("This user already exist.. please check the login form");
    } else {
      const lowerCaseEmail = email.toLowerCase();
      const insertOneUser = await dataBase.insertOne({
        user_id: userId,
        email,
        hashed_password: hashPassword,
      });
      const token = jwt.sign(insertOneUser, TOKEN_KEY, {
        expiresIn: 60 * 24,
      });
      res.status(201).json({
        email: lowerCaseEmail,
        userId,
        token,
      });
    }
  } catch (ex) {
    console.log(ex);
  } finally {
    await client.close();
  }
};
