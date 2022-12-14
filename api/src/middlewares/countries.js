const data = require('./cities.json');
const {City} = require('../db')

const createCitiesForCountry = async() => {
    try {
        await City.bulkCreate(data);
    } catch (error) {
        console.log(error)
    }
};

const getAllCountrys = async() => {
    try {
        const exist = await City.findOne({where: {id: 1}});
        if(!exist) await createCitiesForCountry();
        const results = await City.findAll();
        const countrys = results.length && results.map(c => {
            return c.country;
        });
        const allCountrys = countrys.filter((item, elem) => {
            return countrys.indexOf(item) === elem;
        })
        return allCountrys;
    } catch (error) {
        
    }
}

module.exports = {
    getAllCountrys
}