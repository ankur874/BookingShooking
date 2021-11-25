const mongoose = require("mongoose");

const RestrauntSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description:{
    type:String,
    required:true
  },
  location: {
    type: String,
    required: true,
  },
  Dining_price: {
    type: String,
    required: true,
  },
  Tables: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  images: [String],
  reviews: [],
  coordinates: [Number],
  booked_by: [mongoose.Schema.Types.ObjectId],
});

const Restraunt = mongoose.model("Restraunt", RestrauntSchema);
module.exports = Restraunt;
