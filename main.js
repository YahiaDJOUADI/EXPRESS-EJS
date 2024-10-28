const express = require("express");
const app = express();
app.use("/public",express.static('public'))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  users.push(req.body);
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
