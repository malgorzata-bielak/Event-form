const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const user = require("./event.route");

const app = express();

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", user);

const port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port number" + port);
});
