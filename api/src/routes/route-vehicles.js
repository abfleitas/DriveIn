const { Router } = require("express");
const { Vehicles } = require("../db");
const {
  postVehicleFn,
  getVehicleDetailsFn,
  getVehicles,
} = require("../middlewares/vehicles");
const vehicles = Router();

vehicles.get("/", async (req, res) => {
  try {
    await getVehicles();
    const all = await Vehicles.findAll();
    return res.status(200).send(all);
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

module.exports = vehicles;
