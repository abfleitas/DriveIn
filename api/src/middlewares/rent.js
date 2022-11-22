const { Model } = require('sequelize')
const {Vehicles, Rent} = require('../db.js')
const vehicles = require('../routes/route-vehicles.js')

async function getRent(userId) {
      try {
        
        let rents = await Rent.findAll({
          where: {userId},
          include: {model: Vehicles}
        })

        // let rentas = rents.map(id =>  id.vehicleId)
        // console.log(rentas)
        
        // // const vehicles = await Vehicles.findByPk(170)

        // // const vehicles = rentas.map(async e => {
        // //    await Vehicles.findByPk(e)
        // //  } )
        // const array = []
        //  const vehicles = rentas.map(async (temp) => {
        //    await Vehicles.findAll({where: {id: temp}});
        // });

        // console.log(vehicles)
        // return vehicles
         
        // // const promesa = Promise.all(vehicles)
        
        return rents
      } catch (error) {
      
        return error
      }
  
    }
module.exports = {
getRent,
} 