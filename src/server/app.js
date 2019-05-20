const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const eventController = require("./controller");

const app = express();
app.use(cors());

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.post("/users", eventController.userCreate);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
