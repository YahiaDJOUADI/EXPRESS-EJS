const User = require("../models/User");

const showRegisterPage = (req, res) => {
  res.render("register");
};

const registerUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.redirect("/users");
};

const showUsersPage = async (req, res) => {
  const users = await User.find();
  res.render("users", { users });
};

module.exports = {
  showRegisterPage,
  registerUser,
  showUsersPage,
};
