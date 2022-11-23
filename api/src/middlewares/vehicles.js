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
    const {brand, model, year, color, transmition, air, seats, category, photo, initialPrice, cityId} = data
        
        if (!brand || !model || !year || !color || !transmition || !seats || !category || !photo || !initialPrice) throw Error("Falta informacion del vehiculo") //air esta omitido por tener la opcion de false
        const newcar = await Vehicles.create({brand, model, year, color, transmition, air, seats, category, photo, availability: true,  initialPrice, cityId});  //availability esta forzado en true
        console.log(newcar)
        return newcar;
}


const getVehicleDetailsFn = async (id) => {
    let vehicleDB = await Vehicles.findAll({where: {id}});
    vehicleDB = vehicleDB[0].dataValues
    return vehicleDB
}

const deleteVehicle = async (id) => {
    try {
        const vehicle = await Vehicles.findByPk(id);
        if (vehicle.availability === true) vehicle.availability = false;
        await vehicle.update({ id });
        await vehicle.save();
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = {
    getVehicles,
    postVehicleFn,
    getVehicleDetailsFn,
    deleteVehicle
};