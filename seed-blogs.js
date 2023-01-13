const db = require("./models");
require("dotenv").config();
const mongoose = require("mongoose");


//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`);
  }
);
console.log(`connected to mongo: ${MONGO_URI}`)

db.Blogs.create([
  {
    title: "Kittens",
    image: "https://placekitten.com/200/300",
    description: "loren ipston jnaifjbna cojansfcc",
  }
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
