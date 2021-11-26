const Restraunt = require("../models/restrauntModels");

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
      data: {
        restraunt: restraunt,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
    });
  }
};

exports.updateRestraunt = async (req, res, next) => {
  try {
    const restraunt = await Restraunt.findById(req.params.id);
    restraunt.Tables = req.body.table;
    restraunt.type1 = req.body.type1;
    restraunt.type2 = req.body.type2;
    restraunt.type3 = req.body.type3;
    restraunt.type4 = req.body.type4;
    restraunt.tableCoordinates = req.body.tableCoordinates;
    restraunt.save();
    res.status(201).json({
      status: "Success",
      data: {
        restraunt: restraunt,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
    });
  }
};
