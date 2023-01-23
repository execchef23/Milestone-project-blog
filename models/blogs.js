const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String  },
  // comments: [{ type: mongoose.schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model("Blog", blogSchema);
