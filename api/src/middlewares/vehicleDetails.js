const axios = require("axios");


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
//----------------------------vehicle details

const getVehicleDetails = async (id) => {
    const details = {id, vehicleExample}
    return details;
}

module.exports = getVehicleDetails;