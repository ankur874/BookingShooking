const express = require("express");
const hotelController = require("../controllers/tourController");

const router = express.Router();
router.route("/")
  .get(hotelController.getAllHotels)
  .post(hotelController.createHotel);


router.route("/update/:id").post(hotelController.addReview);

router.route("/:id").get(hotelController.getHotel);

router.route("/book/:id").post(hotelController.bookHotel);

module.exports = router;