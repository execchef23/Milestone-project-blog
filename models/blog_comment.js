const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {type: String, default: 'Anonymous'},
  content: { type: String, default: ''}
});

module.exports = mongoose.model("Comment", commentSchema);
