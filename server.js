const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const DB = require("./DBConnect");
const Admin = require("./Router/Admin");
const AdminModel = require("./Models/Admin");

const port = 8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", Admin);

app.get("/Admin/Contact", function(req, res, next) {
  AdminModel.find({}, function(err, data) {
    if (err) {
      throw err;
    } else {
      res.sendFile(__dirname + "/View/index.html");
    }
  });
});

app.listen(port, function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Server is running on port : " + port);
  }
});
