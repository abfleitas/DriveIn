const axios = require("axios");

const postVehicleFn = async (data) => {
    const details = {post : "se posteo:", data}
    return details;
}



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

const getVehicleDetailsFn = async (id) => {
    const details = {id, vehicleExample}
    return details;
}


module.exports = {postVehicleFn, getVehicleDetailsFn};