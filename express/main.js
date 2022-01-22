const express = require("express");
const app = express();

const bodyParser = require("body-parser");

let log = (req, res, next) => {
  console.log("LOGGED");
  next();
};

let logTime = (req, res, next) => {
  console.log("LOGGED TIME: ", new Date().toISOString());
  next();
};

app.use(bodyParser.json());

app.get("/", log, logTime, (req, res) => {
  res.send("Node js");
});

app.post("/greeting", (req, res) => {
  let data = req.body;
  console.log(data)
  res.status(200).send(`Hello, ${data.name}`);
});

module.exports = app;
