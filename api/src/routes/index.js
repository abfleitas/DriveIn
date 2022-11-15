const { Router } = require("express");
const vehicles = require("./route-vehicles");
const countries = require("./route-countrys");
const city = require("./route-city");
const comments = require("./route-comments");
const mails = require("./mails");
const payment = require("./payment");
const router = Router();

router.use("/country", countries);
router.use("/vehicles", vehicles);
router.use("/cities", city);
router.use("/comments", comments);
router.use("/mails", mails);
router.use("/payment", payment);

module.exports = router;
