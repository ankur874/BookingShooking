const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  hotelFeatures: [],
  rating: {
    type: Number,
    default: 0
  },
  reviews: [],
  pricePerNight: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true
  },
  images: [String],
  parking: {
    type: Number
  },
  petsAllowed: {
    type: Boolean
  },
  breakFast: {
    type: Number
  },
  address: {
    type: String,
    required: true
  },
  coordinates: [Number]
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;