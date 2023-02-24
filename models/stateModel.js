const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
});
const States = mongoose.model("state", schema);
module.exports = States;
