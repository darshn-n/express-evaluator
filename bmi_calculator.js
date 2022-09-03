const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  result = num1 / (num2 * num2);
  res.send("Your Result: " + result);
});

app.listen(3000, function hello() {
  console.log("Server Started");
});
