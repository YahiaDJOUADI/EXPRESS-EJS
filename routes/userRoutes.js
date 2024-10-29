const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to display registration form
router.get("/register", userController.showRegisterPage);

// Route to handle user registration
router.post("/register", userController.registerUser);

// Route to display list of users
router.get("/users", userController.showUsersPage);

module.exports = router;
