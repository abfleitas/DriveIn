const { Router } = require("express");
const { Vehicles } = require("../db");
const {
  postVehicleFn,
  getVehicleDetailsFn,
  getVehicles,
  deleteVehicle,
  putVehicle
} = require("../middlewares/vehicles");
const {dashboard} = require ("../middlewares/dashboard")
const vehicles = Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

vehicles.get("/", async (req, res) => {

  let availability = true;
  let searchBar = "";

  if (req.query.filter) {
    let filter = JSON.parse(req.query.filter);
    if (filter.availability === "noActive") availability = false;
    if (filter.q) searchBar = filter.q;
  }
  const { order, corte, pagina } = dashboard(req.query);

  try {
    await getVehicles();
    if (!req.query) {
      const all = await Vehicles.findAll()
      return res.status(200).send(all);
    }
    await getVehicles();
    const all = await Vehicles.findAll(
      {
        order: order,
        limit: corte,
        offset: pagina,
        where: {
          availability,
          brand: { [Op.iLike]: "%" + searchBar + "%" }
        }
      }
    );

    let cantidad = all.length
    return res.header('Content-Range', `0-10/${cantidad}`).status(200).send(all);
  } catch (error) {
    res.status(404).send(error);
  }
});

vehicles.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getVehicleDetailsFn(id);
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

vehicles.post("/", async (req, res) => {
  try {
    const details = await postVehicleFn(req.body);
    res.status(201).send(details);
  } catch (error) {
    res.status(400).send(error);
  }
});

vehicles.post("/:id", async (req, res) => {
  try {
    const state = req.body.availability
    const id = req.params.id
    const vehicle = await Vehicles.findByPk(id);
    vehicle.availability = state;
    await vehicle.update({id})
    await vehicle.save()
    const VehicleFinal = await getVehicleDetailsFn(id);
    res.status(201).send(VehicleFinal);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// ***********************REACT ADMIN *****************

vehicles.delete("/", async (req, res) => {
  try {
    const { filter } = req.query;
    const id = JSON.parse(filter);
    const unactive = [
      id.id.map(async e => {
        await deleteVehicle(e)
      })
    ];

    res.status(201).send(unactive);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

vehicles.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const vehicle = await putVehicle(id, body);
    res.status(201).send(vehicle);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = vehicles;
