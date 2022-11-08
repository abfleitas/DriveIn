const { Router } = require("express");
const vehiclePostFn = require("../middlewares/vehiclePost");
const vehiclePost = Router();

//


vehiclePost.post("/", async (req, res) => {
    try {
        data = req.body
        const {brand, model, airconditioning, transmition, seats, category, color, photo, price} = data
        if (!brand || !model || !airconditioning || !transmition || !seats || !category || !color || !photo || !price) throw Error("Falta informacion del vehiculo")
        const details = await vehiclePostFn(data);
        res.status(201).send(details)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = vehiclePost