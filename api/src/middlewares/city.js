const {City}= require ("../db")


const getAllCity= async()=>{

     try {
        const allCities = await City.findAll()
        return allCities

     } catch (error) {
        console.log()        
     }
}




module.exports= {
    getAllCity
}

