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
    username: "Kittens",
    password: "2345infs98y",
    email: "test@gmail.com",
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
