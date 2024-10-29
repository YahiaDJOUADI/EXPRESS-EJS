const mongoose = require("mongoose");

const userModel = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
};

module.exports = mongoose.model("User", userModel);
