require('dotenv').config();
const {Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}:${DB_HOST}/drivein`,{
    logging: false,
    native: false,
});

const basename = path.basename(__filename);
const modelArray = [];

fs.readFileSync(path.join(__dirname, '/models')).filter((file) => 
(file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3)==='.js')).forEach((file)=>{
    modelArray.push(requiere(path.join(__dirname, '/models', file)));
});

modelArray.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capitalFirst = entries.map((entry) => [entry[0][0].toUpperCase()+entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capitalFirst);

const { City, Concessionarie, Users, Vehicles } = sequelize.models;

Concessionarie.belongsToMany(Vehicles, {through: 'ConcessionarieVehicle'});
Vehicles.belongsToMany(Concessionarie, {through: 'ConcessionarieVehicle'});

module.exports = {
    ...sequelize.models,
    connect: sequelize,
};