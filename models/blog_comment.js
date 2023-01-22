const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  comment: { type: String, default: ''}
});

module.exports = mongoose.model("Comments", commentsSchema);
