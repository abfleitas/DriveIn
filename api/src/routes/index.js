const { Router } = require('express');
const vehicles = require("./route-vehicles")
const countries = require('./route-countrys')
const city=require("./route-city")
const comments =require("./route-comments")
const mails =require("./mails")
const router = Router();

router.use("/country", countries)
router.use("/vehicles", vehicles);
router.use("/cities",city );
router.use("/comments", comments)
router.use("/mails", mails)

module.exports = router;