var express = require("express");
var extractClient = require("./utils/extract-client");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.json(extractClient(req));
});

app.listen(port, function() {
  console.log("App listening on port: " + port);
});