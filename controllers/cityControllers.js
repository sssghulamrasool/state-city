const Citys = require("../models/cityModel");
exports.city = async (req, res, next) => {
  try {
    let city;
    if (req.query.name) {
      city = await Citys.find({
        state_name: req.query.name,
      }).select({
        _id: 0,
        __v: 0,
      });
    } else {
      city = await Citys.find().select({
        _id: 0,
        __v: 0,
      });
    }
    return res.status(200).json({
      status: true,
      totalCity: city.length,
      city,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
