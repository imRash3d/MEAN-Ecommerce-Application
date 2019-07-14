let express = require("express");
var app = express();
// Import Body parser
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let mongoose = require("mongoose");
// Initialize the app

// Import routes
let apiRoutes = require("./route/productRoute");

// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://admin:admin123@ds349247.mlab.com:49247/shopup", {
  useNewUrlParser: true
}); // mongodb://<xero2pi>:<1qazZAQ!>@ds349247.mlab.com:49247/shopup

var db = mongoose.connection;
db.on("error", err => {
  console.log(err);
});
db.once("open", () => {
  console.log("Db Connected ");
});
// Setup server port
var port = process.env.PORT || 8080;

// Use Api routes in the App
app.use("/api/products", apiRoutes);

// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));

// Launch app to listen to specified port
app.listen(port, function() {
  console.log("Running RestHub on port " + port);
});
