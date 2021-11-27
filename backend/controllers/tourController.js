const Hotel = require("../models/hotelModel");

exports.createHotel = async (req, res, next) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        hotel: newHotel
      }
    })
  } catch (err) {
    res.status(500).json({
      status: "Failed"
    })
  }
}

exports.getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(201).json({
      status: "Success",
      data: hotels

    })
  } catch (err) {
    res.status(500).json({
      status: "Failed"
    })
  }
}

exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(201).json({
      status: "Success",
      data: {
        hotel: hotel
      }
    })
  } catch (err) {
    res.status(500).json({
      status: "Failed"
    })
  }
}


exports.addReview = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    hotel.reviews.push(req.body);
    hotel.save();

    res.status(201).json({
      status: "Success",
      data: {
        hotel: hotel,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
    });
  }
};

exports.bookHotel = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    user.hotels.push(req.body.hotelId);
    user.save();

    res.status(201).json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
    });
  }
}
