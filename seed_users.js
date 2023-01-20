const db = require("./models");
require("dotenv").config();
const mongoose = require("mongoose");

//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.User.create([
  {
    firstName: "function",
    lastName: "play",
    username: "Kittens",
    email: "funky",
    hash_password: "2345infs98y",
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
