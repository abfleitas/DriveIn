const { Router } = require("express");
const {postVehicleFn, getVehicleDetailsFn} = require("../middlewares/vehicles");
const axios = require("axios");
const vehicles = Router();

//


vehicles.post("/", async (req, res) => {
    try {
        const details = await postVehicleFn(req.body);
        res.status(201).send(details)
    } catch (error) {
        res.status(400).send(error.message);
    }
})




vehicles.get("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const response = await getVehicleDetailsFn(id);
        res.status(201).send(response)
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = vehicles