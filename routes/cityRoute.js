const express = require("express");
const router = express.Router();
const { city } = require("../controllers/cityControllers");
router.get("/", city);
module.exports = router;
