const { Router } = require('express');

const VehicleDetails = require("./Vehicle_details")

const router = Router();

router.use("/vehicleDetails", VehicleDetails)



module.exports = router;