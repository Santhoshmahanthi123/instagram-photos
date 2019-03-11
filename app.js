"use strict";
require("dotenv").config();

// Imports dependencies and set up http server
const express = require("express"),
  bodyParser = require("body-parser"),
  app = express().use(bodyParser.json()); // creates express http server

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("welcome to instagram photos");
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
