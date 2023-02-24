const States = require("../models/stateModel");
exports.states = async (req, res, next) => {
  try {
    const state = await States.find().select({
      _id: 0,
      __v: 0,
    });
    res.status(200).json({
      status: true,
      total_states: state.length,
      state,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
