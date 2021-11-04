const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    requird: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps: true})

const User = mongoose.model("User", userScheme);

module.exports = User;