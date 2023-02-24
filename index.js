const dotenv = require("dotenv");
dotenv.config();
require("./config.js");
const cors = require("cors");
const express = require("express");
const app = express();
const cityRoutes = require("./routes/cityRoute");
const stateRoutes = require("./routes/stateRoute");

app.use(express.json());
app.use("/api/city", cityRoutes);
app.use("/api/state", stateRoutes);
app.all("/").use((req, res, next) => {
  return res.status(500).json({
    status: false,
    message: `Can't find this ${req.originalUrl} url`,
  });
});

app.listen(process.env.PORT, () => console.log("SERVER IS RUNNING"));
