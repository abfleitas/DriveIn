const {City}= require ("../db")


const getAllCity= async()=>{

     try {
        const allCities = await City.findAll()
    

        return allCities

     } catch (error) {
        console.log()        
     }
}
const getcityDestacadas=async()=>{
    try {
        const destacadas = await City.findAll({
            wheres:{
                destacado: "true"
            }
        })
    } catch (error) {
        
    }
}




module.exports= {
    getAllCity
}

