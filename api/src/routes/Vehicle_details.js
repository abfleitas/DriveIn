const { Router } = require("express");
const getVehicleDetails = require("../middlewares/vehicleDetails");
const axios = require("axios");

const VehicleDetails = Router();




VehicleDetails.get("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const response = await getVehicleDetails(id);
        res.status(201).send(response)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = VehicleDetails;