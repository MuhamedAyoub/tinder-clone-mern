const PORT = 8000;
const express = require("express");
const userRouter = require("./routes/users").router;
const authRouter = require("./routes/auth").router;
const cors = require("cors");
//const uri = process.env.MONGOD_URI;
const app = express();
app.use(cors());
app.listen(PORT, () => {
  console.log("Server connect to the port ", PORT);
});

//const dbConnect = require("./dbConnect").dbConnect;
app.use(express.urlencoded({ extended: false }));

//TODO start Routing...
app.use(userRouter);
app.use(authRouter);
app.use(express.json());
//TODO End Routing...
