require("dotenv").config();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { data: Buffer, type: String },
});

module.exports = mongoose.model("User", userSchema);
