const { Router } = require("express");
const {postVehicleFn, getVehicleDetailsFn} = require("../middlewares/vehicles");
const axios = require("axios");
const vehicles = Router();

//


vehicles.post("/", async (req, res) => {
    try {
        data = req.body
        const {brand, model, airconditioning, transmition, seats, category, color, photo, price} = data
        if (!brand || !model || !airconditioning || !transmition || !seats || !category || !color || !photo || !price) throw Error("Falta informacion del vehiculo")
        const details = await postVehicleFn(data);
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