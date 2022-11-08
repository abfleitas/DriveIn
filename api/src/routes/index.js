const { Router } = require('express');
const VehicleDetails = require("./Vehicle_details")
const vehiclePost = require("./vehicle_post")

const router = Router();

router.use("/vehicleDetails", VehicleDetails)
router.use("/vehiclePost", vehiclePost)


module.exports = router;