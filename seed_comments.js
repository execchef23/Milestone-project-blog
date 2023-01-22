const db = require("./models");
require("dotenv").config();
const mongoose = require("mongoose");

//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.comments.create([
    {
        comment: "This cat is adorable!!!",
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