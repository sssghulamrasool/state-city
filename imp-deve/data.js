const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Citys = require("../models/cityModel");

mongoose
  .connect(
    "mongodb+srv://mernecomm:6mYffxkpMn2CVsSw@mernecomm.evo5syz.mongodb.net/city-api?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connection successful!"));

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/city.json`, "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Citys.create(tours);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Citys.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
