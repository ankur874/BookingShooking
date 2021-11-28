const Restraunt = require("../models/restrauntModels");
const User = require("../models/userModel");

exports.createRestraunt = async (req, res, next) => {
  try {
    const newRestraunt = await Restraunt.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        restraunt: newRestraunt,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
    });
  }
};

exports.getAllRestraunts = async (req, res, next) => {
  try {
    const Restraunts = await Restraunt.find();
    res.status(201).json({
      status: "Success",
      data: Restraunts,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
    });
  }
};

exports.getRestraunt = async (req, res, next) => {
  try {
    const restraunt = await Restraunt.findById(req.params.id);
    res.status(201).json({
      status: "Success",
      data: restraunt,

    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      status: "Failed",
    });
  }
};

exports.updateRestraunt = async (req, res, next) => {
  try {
    const restraunt = await Restraunt.findById(req.params.id);
    restraunt.Tables = req.body.table;
    restraunt.tableCoordinates = req.body.tableCoordinates;
    restraunt.save();
    res.status(201).json({
      status: "Success",
      data: restraunt,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
    });
  }
};


exports.addReview = async (req, res, next) => {
  try {
    const restraunt = await Restraunt.findById(req.params.id);
    restraunt.reviews.push(req.body);
    restraunt.save();

    res.status(201).json({
      status: "Success",
      data: {
        restraunt: restraunt,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
    });
  }
};

exports.bookRestaurant = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    user.restaurants.push(req.body.restaurantId);
    user.save();

    res.status(201).json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "Failed",
    });
  }
}