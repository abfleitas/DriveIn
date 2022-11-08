const axios = require('axios');

const getAllCountrys = async() => {
    try {
        const countrys = await axios.get('https://api.wasi.co/v1/location/all-countries?id_company=16215574&wasi_token=zq7h_Cuhn_bhuK_yUsv');
        const allCountrys = countrys?.data.map(async (p) => {
            return {
                name: p.name
            }
        })
        return allCountrys;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getAllCountrys
}