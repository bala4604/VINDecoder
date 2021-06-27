var express = require("express"),
  app = express(),
  port = 9000;
const cors = require("cors");
app.listen(port);
var request = require("request");

console.log("RESTful API server started on: " + port);

app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());

//Login page routes
require("./router/user_routes")(app);
