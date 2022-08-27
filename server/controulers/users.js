const URI =
  "mongodb+srv://mohamed:gggg45@cluster0.nwi1e0p.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = require("mongodb").MongoClient;
module.exports.getUsers = async (req, res) => {
  const client = new mongoClient(URI);
  try {
    await client.connect();
    const db = client.db("tinder-app");
    const dataBase = db.collection("users");
    const data = await dataBase.find().toArray();
    console.log(data);
    res.status(200).send(data);
  } catch (ex) {
    console.log(ex);
    res.status(500).send("There is an Error in data base");
  } finally {
    await client.close();
  }
};
