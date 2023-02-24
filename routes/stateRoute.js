const express = require("express");
const router = express.Router();
const { states } = require("../controllers/stateControllers");

router.get("/", states);
module.exports = router;
