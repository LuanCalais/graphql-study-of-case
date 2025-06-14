const { readFileSync } = require("fs");
const { join } = require("path");

module.exports = [
  readFileSync(join(__dirname, "book.graphql"), "utf8"),
  readFileSync(join(__dirname, "author.graphql"), "utf8"),
];
