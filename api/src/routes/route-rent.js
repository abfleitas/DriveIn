const { Router } = require("express");
const { allRents, cancelRent, cancelRentAdmin } = require("../middlewares/rent");
const router = Router();

router.get("/", allRents)

router.put("/:id", cancelRent)
router.delete("/", cancelRentAdmin)

module.exports = router;
