
const {Users, Vehicles, Rent} = require('../db.js')

const {dashboard} = require ("../middlewares/dashboard")

const usersList = require('./users.json')



async function postUser(req, res) {
  const { name, lastName, whatsapp, email, password } = req.body;
  const newUser = { name, lastName, whatsapp, email, password };
  try {
    if (!name || !lastName  || !whatsapp || !email || !password) {
      return res.json({ error: "Incomplete information" });
    }

    const existUser = await Users.findOne({ where: { email } });

    if (existUser)
      return res.status(404).send("Ya existe un usuario con el ese e-mail");

    await Users.create(newUser);
    res.status(200).json("Usuario creado");
    return;
  } catch (error) {
    res.json(error);
    return;
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    let user = await Users.getByPk(id);
    user
      ? res.status(200).json(user)
      : res.status(400).json("No existe ese usuario");
  } catch (error) {
    res.json(error);
    return;
  }
}

async function getUsers(req, res) {

  const {order, corte, pagina} = dashboard(req.query)

    try {
      if(!(await Users.findAll()).length) await Users.bulkCreate(usersList);
      console.log(await Users.findAll());

      let users = await Users.findAll({
        include: {
          model: Vehicles,
          model: Rent
        },
        order: order,
        limit: corte,
        offset: pagina
      });
      return res.status(200).json(users)
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
    if (exist) return res.status(200).send(exist);
    return res.status(400).send("No existe el usuario con esos datos");
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = {
  postUser,
  getUserById,
  getUsers,
  getUserByEmail,
  getLoginUser,
};
