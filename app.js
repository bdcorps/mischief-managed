var express = require("express"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

var emails = [];

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "entry.html"));
});

app.get("/app", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "app.html"));
});

app.post("/submit", function(req, res) {
  emails.push(req.body.email);
  res.send("Thank you for subscribing! Check us out on Product Hunt.");
});

app.get("/list", function(req, res) {
  const emailsList = JSON.stringify(emails);
  res.send(emailsList);
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
