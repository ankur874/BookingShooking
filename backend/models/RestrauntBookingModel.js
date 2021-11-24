const mongoose = require("mongoose");

const Restraunt_Booking = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  type1: {
    type: String,
    count: Number,
    required: true,
  },
  type2: {
    type: String,
    count: Number,
    required: true,
  },
  type3: {
    type: String,
    count: Number,
    required: true,
  },
  type4: {
    type: String,
    count: Number,
    required: true,
  },
  restraunt_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = Restraunt_Booking;
