const express = require("express");

const router = express.Router();
const eventController = require("./event.controller");

module.exports = router;

router.post("/user", eventController.userCreate);
