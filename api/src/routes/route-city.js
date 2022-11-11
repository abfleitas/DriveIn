const { Router } = require("express");
const {
  getAllCity,
  getCitiesByCountry,
  getcityDestacadas,
} = require("../middlewares/city");
const { City, Vehicles } = require("../db");
const router = Router();

router.get("/destacadas", async (req, res) => {
  try {
    const destacadas = await getcityDestacadas();

    return res.status(200).send(destacadas);
  } catch (error) {
    console.log("no carga nada", error);
  }
});
router.get("/", async (req, res) => {
  const country = req.query.country;
  try {
    if (country) {
      return res.status(200).send(await getCitiesByCountry(country));
    } else {
      const allCities = await getAllCity();
      return res.status(200).send(allCities);
    }
  } catch (error) {
    res.status(404).send("la busqueda fallo");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allCars = await City.findAll({
      where: {
        id: id,
      },
      include: {
        model: Vehicles,
        where: {
          cityId: id,
        },
      },
    });
    return res.status(200).send(allCars);
  } catch (error) {
    res.status(404).send("la busqueda fallo");
  }
});

module.exports = router;
