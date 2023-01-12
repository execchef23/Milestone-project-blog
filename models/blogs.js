const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  bloger: { type: String, required: true },
  pic: { data: Buffer, type: String },
  blogtype: { type: String  },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Blog", blogSchema);
