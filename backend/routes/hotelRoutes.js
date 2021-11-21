const express = require("express");
const hotelController = require("../controllers/tourController");

const router = express.Router();
router.route("/")
  .get(hotelController.getAllHotels)
  .post(hotelController.createHotel);

router.route("/:id").get(hotelController.getHotel);
module.exports = router;