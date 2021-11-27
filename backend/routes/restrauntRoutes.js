const express = require("express");
const restrauntController = require("../controllers/restController");

const router = express.Router();
router.route("/")
  .get(restrauntController.getAllRestraunts)
  .post(restrauntController.createRestraunt);

router.route("/update/:id").post(restrauntController.addReview);

router.route("/:id")
  .get(restrauntController.getRestraunt)
  .post(restrauntController.updateRestraunt)

router.route("/book/:id").post(restrauntController.bookRestaurant);

module.exports = router;