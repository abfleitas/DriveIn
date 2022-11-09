const { Router } = require('express');
const vehicles = require("./route-vehicles")
const countries = require('./route-countrys')

const router = Router();

router.use("/country", countries)
router.use("/vehicles", vehicles);


module.exports = router;