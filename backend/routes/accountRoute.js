const express = require("express");
const bodyParser = require("body-parser");
const { register, login } = require("../controllers/accountController");

const app = express();
app.use(bodyParser.json());

app.post("/register", register);
app.post("/login", login);

module.exports = app;
