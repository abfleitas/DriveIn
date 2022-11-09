const axios = require("axios");

const postVehicleFn = async (data) => {
    const {brand, model, year, color, transmition, air, seats, category, photo, idCity, price} = data
    if (!brand || !model || !year || !color || !transmition || !air || !seats || !category || !photo || !idCity || !price) throw Error("Falta informacion del vehiculo")
    
    const details = {post : "se posteo:", data}
    return details;
}



//----------------------------vehicle details
const vehicleExample = {
    id : 1, 
    brand: "Toyota",
    model: "AE 86",
    year : "1983",
    color : "White",
    transmition: "Manual",
    air: true,
    seats: 4,
    category: "hatchback",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sprinter_Trueno_1600_GT_%28AE86%29.jpg/220px-Sprinter_Trueno_1600_GT_%28AE86%29.jpg",
    availability : true,
    idCity : 1,
    price: 30
}
//----------------------------vehicle details

const getVehicleDetailsFn = async (id) => {
    const details = {id, vehicleExample}
    return details;
}


module.exports = {postVehicleFn, getVehicleDetailsFn};