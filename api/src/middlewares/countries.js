const axios = require('axios');
const data = require('./db.json')

const getAllCountrys = async() => {
    try {
        const allCountrys = data.map((p) => {
            let obj = {
                country: p.country
            }
            return obj;
        })
        return allCountrys;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getAllCountrys
}