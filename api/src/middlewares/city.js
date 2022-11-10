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
          where:{
            destacado:true
          }
            
       })
       return destacadas
    } catch (error) {
        console.log(error)
    }
}




module.exports= {
    getAllCity,getcityDestacadas
}

