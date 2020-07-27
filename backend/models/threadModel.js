const mongoose = require("mongoose");

const {commentSchema} = require('./commentModel');
const {pinSchema} = require('./pinModel');

const threadSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  // content may be used if the user can write something before creating a thread.
  content: String,
  comments: [commentSchema],
  pin: pinSchema, //used to get the address of the protest on the thread
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = {
    Thread: mongoose.model("threads", threadSchema),
    threadSchema
};
