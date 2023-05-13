const path = require("path");

const express = require("express");

const app = express();

const { dadRouter } = require(path.join(
  __dirname,
  "Router",
  "Dad-jokes.router"
));
app.use(express.json());
app.use(dadRouter);

module.exports = {
  app,
};
