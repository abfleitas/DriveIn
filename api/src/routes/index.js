const { Router } = require('express');
const vehicles = require("./route-vehicles")
const countries = require('./route-countrys')
const city=require("./route-city")

const router = Router();

router.use("/country", countries)
router.use("/vehicles", vehicles);
router.use("/cities",city )

module.exports = router;