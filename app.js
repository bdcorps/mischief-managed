var express = require("express"),
  path = require("path"),
  app = express();

var port = process.env.PORT || 3005;

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "main2.html"));
});

app.get("/app", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "main3.html"));
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + app.get("port"));
});
