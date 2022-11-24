const { Router } = require("express");
const { allRents } = require("../middlewares/rent");
const router = Router();

router.get("/", allRents)

module.exports = router;
