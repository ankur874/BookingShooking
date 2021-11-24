const Restraunt = require('../models/restrauntModels');


exports.createRestraunt = async (req, res, next) => {
    try {
      const newRestraunt = await Restraunt.create(req.body);
      res.status(201).json({
        status: "Success",
        data: {
          restraunt: newRestraunt
        }
      })
    } catch (err) {
      res.status(500).json({
        status: "Failed"
      })
    }
  }
  
  exports.getAllRestraunts = async (req, res, next) => {
    try {
      const Restraunts = await Restraunt.find();
      res.status(201).json({
        status: "Success",
        data: {
            restraunt: Restraunts
        }
      })
    } catch (err) {
      res.status(500).json({
        status: "Failed"
      })
    }
  }
  
  exports.getRestraunt = async (req, res, next) => {
    try {
      const restraunt = await Restraunt.findById(req.params.id);
      res.status(201).json({
        status: "Success",
        data: {
            restraunt: restraunt
        }
      })
    } catch (err) {
      res.status(500).json({
        status: "Failed"
      })
    }
  }

