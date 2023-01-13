const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String  }
});

module.exports = mongoose.model("Blogs", blogSchema);
