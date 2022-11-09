const { Router } = require('express');
const vehicles = require("./route-vehicles")

const router = Router();


router.use("/vehicles", vehicles)


module.exports = router;