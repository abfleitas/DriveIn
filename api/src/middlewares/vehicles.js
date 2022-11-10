const { Vehicles } = require('../db.js');
const vehiculos = require('./vehicles.json')

const getVehicles = async () => {
    try {
        if(!(await Vehicles.findAll()).length) await Vehicles.bulkCreate(vehiculos);
    } catch (error) {
        console.log();
    }
}

const postVehicleFn = async (data) => {
    const {brand, model, year, color, transmition, air, seats, category, photo, initialPrice} = data
        
        if (!brand || !model || !year || !color || !transmition || !seats || !category || !photo || !initialPrice) throw Error("Falta informacion del vehiculo") //air esta omitido por tener la opcion de false
        const newcar = await Vehicles.create({brand, model, year, color, transmition, air, seats, category, photo, availability: true,  initialPrice});  //availability esta forzado en true
        console.log(newcar)
        return newcar;
}


const getVehicleDetailsFn = async (id) => {
    let vehicleDB = await Vehicles.findAll({where: {id}});
    vehicleDB = vehicleDB[0].dataValues
    return vehicleDB
}

module.exports = {
    getVehicles,
    postVehicleFn,
    getVehicleDetailsFn
};