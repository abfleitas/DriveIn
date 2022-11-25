const {Users, Vehicles, Rent} = require('../db.js')
const {dashboard} = require ("../middlewares/dashboard")
const usersList = require('./users.json')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



async function postUser(req, res) {
  
  const { name, lastName,  whatsapp, email, password } = req.body;
  const newUser = { name, lastName,  whatsapp, email, password };
  
  try {
    if (!name || !lastName || !whatsapp || !email || !password) {
      return res.json({ error: "Incomplete information" });
    }
    const existUser = await Users.findOne({ where: { email } });
    if (existUser) return res.status(404).send("Ya existe un usuario con ese e-mail");
    
    await Users.create(newUser);
    
    return res.status(200).json(newUser)
  } catch (error) {
    res.json(error);
    return;
  }
}

async function getUserById(req, res) {
  try {
    
    const { id } = req.params;
    let user = await Users.findByPk(id);
    user
      ? res.status(200).json(user)
      : res.status(400).json("No existe ese usuario");
  } catch (error) {
    res.json(error);
    return;
  }
}



async function getUsers(req, res) {

  let activos = true
  let searchBar = ""
  
  if (req.query.filter) {
    let filter = JSON.parse(req.query.filter);
    let categoria = filter.category
    if (categoria === "noActives") activos = false
    if (filter.q) searchBar = filter.q

  } 

  const {order, corte, pagina} = dashboard(req.query)
    try {
      
      if(!(await Users.findAll()).length) await Users.bulkCreate(usersList);
      
      let users = await Users.findAll({
        
        include: {
          model: Vehicles,
          model: Rent
        },
        order: order,
        limit: corte,
        offset: pagina,
        where: {active: activos,
                name: {
                      [Op.iLike]: '%' + searchBar + '%'
                      },
        },
      }
      );
      
      let cantidad = await Users.count(
        {where: {active: activos}}
      )
      return res.header('Content-Range',`0-10/${cantidad}`).status(200).json(users)
    } catch (error) {
      res.json(error);
      return;
    }

  }

async function getUserByEmail(req, res) {
  try {
    const { email } = req.params;
    const exist = await Users.findOne({
      where: { email },
      include: {
        model: Vehicles,
      },
    });
    return res.status(200).send(exist);
  } catch (error) {
    res.status(404).send(error);
  }
}

async function getLoginUser(req, res) {
  try {
    const { email, password } = req.body;
    const exist = await Users.findOne({
      where: {
        email,
        password,
      },
      include: {
        model: Vehicles,
        model: Rent,
      },
    });
    if (!exist) throw Error("No existe el usuario con esos datos")
    if(!exist.active) throw Error("Usuario deshabilitado")
    if (exist) return res.status(200).send(exist);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function deleteUser (id) {
  try {
    const user = await Users.findByPk(id) ;
    if (user.active === true) user.active = false;
    await user.update({id})
    await user.save()

  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function putUser (id, body) {
  try {
    const user = await Users.findByPk(id) ;
    const datos = body
    for (const proper in datos) {
      user[proper] = datos[proper]
      await user.update(
        {where: {id: id}}
        )
      await user.save()
      
    }

   
    return user  
  } catch (error) {
    res.status(404).send(error.message);
  }
}



module.exports = {
  postUser,
  getUserById,
  getUsers,
  getUserByEmail,
  getLoginUser,
  deleteUser,
  putUser
};
