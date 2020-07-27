const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const {commentSchema} = require('./commentModel');
const {pinSchema} = require('./pinModel');
const {threadSchema} = require('./threadModel');

//creating account registration and login schema
const accountSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  comments: [commentSchema],
  threads: [threadSchema],
  pins: [pinSchema]
});

accountSchema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = {
  Account: mongoose.model("account", accountSchema),
  accountSchema
};
