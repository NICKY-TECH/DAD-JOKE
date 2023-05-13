const path = require("path");

const { getDadJokes } = require(path.join(
  __dirname,
  "..",
  "Controller",
  "Dad-jokes"
));

const dadRouter = require("express").Router();

dadRouter.get("/dad-jokes", getDadJokes);

module.exports = {
  dadRouter,
}
