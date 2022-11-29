const { Model } = require('sequelize')
const {Vehicles, Rent, Users, City} = require('../db.js')
const rents = require('./rents.json')
const {dashboard} = require ("../middlewares/dashboard")



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
        include: {
          model: Vehicles,
          include: {
            model: City
          }
        }
      })
      if (!rent.length) throw Error("No se encontraron trasacciones")
       return res.status(200).send(rent)
    }

    if (req.query.filter) {
      let filter = JSON.parse(req.query.filter);
      let categoria = filter.category

      if (categoria) {
        const users = await  Users.findAll()
        let rentsInactive = await Rent.findAll({
          include : {
            model: Vehicles,
            required: false,
          },
          order: order,
          limit:corte,
          offset: pagina,
          where: {active: false}
        })
        await rentsInactive.forEach(rent => {
          const user = users.filter(user => user.id === rent.userId);
          rent.dataValues.userEmail = user[0].dataValues.email
          rent.dataValues.userName = user[0].dataValues.name
          rent.dataValues.vehicle = rent.dataValues.vehicle.brand + " " + rent.dataValues.vehicle.model
        })
        let cantidad = Rent.count({
          where: {active: false}
        })
        return res.header("Content-Range",`0-10/${cantidad}`).status(200).send(rentsInactive)
      };
    }
    if (order || corte || pagina) {
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
      
      let cantidad = await Rent.count()
      return res.header("Content-Range",`0-10/${cantidad}`).status(200).send(response)
    }

    const response = await  Rent.findAll()
    res.status(200).send(response)

  } catch (error) {
    res.status(404).send({error: error.message});
  }
};

const cancelRent = async (req, res) => {
  try {
    const id = req.params.id
    const rent = await Rent.findByPk(id);
    rent.active = false;
    await rent.update({id})
    await rent.save()
    const rentFinal = await Rent.findByPk(id);
    res.status(201).send(rentFinal);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const cancelRentAdmin = async (req, res) => {
  try {
    const {filter} = req.query
    const id = JSON.parse(filter);
    const unactive = [
      id.id.map(async e => {
        const rent = await Rent.findByPk(e);
        rent.active = false;
        await rent.update({id})
        await rent.save()
        })
    ]
    res.status(201).send(unactive);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
allRents,
cancelRent,
cancelRentAdmin
} 