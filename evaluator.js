const express = require("express");

const app = express();

app.get("/", function () {
  console.log("Evaluator");
});

app.listen(3000, function hello() {
  console.log("Hello World");
});
