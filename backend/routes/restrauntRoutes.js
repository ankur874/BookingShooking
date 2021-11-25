const express = require("express");
const restrauntController = require("../controllers/restController");

const router = express.Router();
router.route("/")
  .get(restrauntController.getAllRestraunts)
  .post(restrauntController.createRestraunt);

router.route("/:id").get(restrauntController.getRestraunt).post(restrauntController.updateRestraunt);
module.exports = router;