var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8000;

// Serves static content from public folder
app.use(express.static("public"));

// parse application x-www-form-urlencoded , json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes;
app.use("/", require("./routes/index"));
app.use("/", require("./routes/patterns"));

//====================================================================
app.listen(PORT, console.log(`Server started on port ${PORT}`));
