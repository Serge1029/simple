const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  //May switch to avatars later
  user: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  dislikes: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = {
    Comment: mongoose.model("comments", commentSchema),
    commentSchema
};
