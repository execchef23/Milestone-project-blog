// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT;
const blogsController = require("./controllers/blogs_controller");
const userController = require("./controllers/User_controller");
const cors = require("cors")
const passport = require("passport")
const bodyParser = require("body-parser")
const LocalStrategy = require("passport-local")

passportLocalMongoose =
    require("passport-local-mongoose"),
User = require("./models/user2");


// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
mongoose.set("strictQuery", true);
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
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Express Settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

app.use("/", blogsController);

app.use("/", userController);

app.use(express.static(path.join(__dirname, "my-app", "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "my-app", "public", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on`, PORT);
});

// LOG IN!
// const loginschema=new mongoose.Schema({
//   name:{
//     type:String,
//     required:true
//   },
//   password:{
//     type:String,
//     required:true
//   }
// })

// const collection=new mongoose.model