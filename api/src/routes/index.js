const { Router } = require('express');

const VehicleDetails = require("./Vehicle_details")
const country = require('./route-countrys')

const router = Router();

router.use("/vehicleDetails", VehicleDetails)
router.use("/country", country)



module.exports = router;