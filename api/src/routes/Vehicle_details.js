const { Router } = require("express");
//const { Vehicle } = require("../db.js");
const axios = require("axios");

const VehicleDetails = Router();

//----------------------------vehicle details
const vehicleExample = {
    Brand: "Toyota",
    Model: "AE 86",
    Puntuacion: 4.5,
    AC: true,
    transmition: "Manual",
    NSeat: 4,
    Category: "hatchback",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sprinter_Trueno_1600_GT_%28AE86%29.jpg/220px-Sprinter_Trueno_1600_GT_%28AE86%29.jpg",
    History: [],
    Price: 30,
    Available: true
}


VehicleDetails.get("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        console.log(id)
        res.status(201).send(vehicleExample)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = VehicleDetails;