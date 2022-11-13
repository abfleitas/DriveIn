const { Router } = require("express");
const { getAllCountrys } = require("../middlewares/countries");
const { getCitiesByCountry } = require("../middlewares/city");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const allCountrys = await getAllCountrys();
    return res.status(200).send(allCountrys);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:country/cities", async (req, res) => {
  try {
    const { country } = req.params;
    return res.status(200).send(await getCitiesByCountry(country));
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
