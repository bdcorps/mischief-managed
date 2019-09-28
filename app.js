var express = require("express"),
  path = require("path"),
  app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "entry.html"));
});

app.get("/app", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "app.html"));
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
