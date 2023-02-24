const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  state_name: String,
});
const Citys = mongoose.model("city", schema);
module.exports = Citys;
