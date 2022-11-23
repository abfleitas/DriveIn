const { Model } = require('sequelize')
const {Vehicles, Rent, Users} = require('../db.js')
const rents = require('./rents.json')
const {dashboard} = require ("../middlewares/dashboard")


//obtiene todas las rentas
//obtiene renta por id por query
//obtiene rentas de usuario por userId por query
//obtiene todas las rentas para admin
const allRents = async (req, res) => {
  try {
    const {order, corte, pagina} = dashboard(req.query)
    
    if(!(await Rent.findAll()).length) await Rent.bulkCreate(rents);

    if(req.query.id) {
      const rent = await Rent.findByPk(req.query.id)
      if (!rent) throw Error("No se encontro transaccion con esa ID")
       return res.status(200).send(rent)
    }
    if(req.query.userId) {
      const userId = req.query.userId
      let rent = await Rent.findAll({
        where: {userId},
        include: {model: Vehicles}
      })
      if (!rent.length) throw Error("No se encontraron trasacciones")
       return res.status(200).send(rent)
    }
    if (order || corte || pagina) {
      // const vehiclesTest = await Vehicles.findByPk(1, {
      //   include: Rent
      // })
      const users = await  Users.findAll()
      const response = await  Rent.findAll({
        include : {
          model: Vehicles,
          required: false
        },
        order: order,
        limit:corte,
        offset: pagina
      });
      await response.forEach(rent => {
        const user = users.filter(user => user.id === rent.userId);
        rent.dataValues.userEmail = user[0].dataValues.email
        rent.dataValues.userName = user[0].dataValues.name
        rent.dataValues.vehicle = rent.dataValues.vehicle.brand + " " + rent.dataValues.vehicle.model
      })
      return res.status(200).send(response)
    }


    const response = await  Rent.findAll()
    res.status(200).send(response)
    

  } catch (error) {
    console.log(error.message)
    res.status(404).send({error: error.message});
  }
}

module.exports = {
allRents
} 