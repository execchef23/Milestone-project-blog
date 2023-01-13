// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT;
const blogsController = require("./controllers/blogs_controller");

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

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Express Settings

app.use(express.json());

app.use("/blogs", blogsController);

app.use(express.static(path.join(__dirname, "../my-app/public", "index.html")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../my-app/public", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on`, PORT);
});
