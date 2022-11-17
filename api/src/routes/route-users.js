const { Router } = require("express");
const { postUser, getUserById, getUsers, getUserByEmail, getLoginUser } = require("../middlewares/Users");
const { Users, Vehicles} = require('../db')
const user = Router();

user.get("/", getUsers);

user.get("/info/:email", getUserByEmail);

user.post("/register", postUser);

user.post("/login", getLoginUser);

user.post("/login/auth0", async(req, res) => {
    try {
        const { name, lastName, email, photo} = req.body;
        const exist = await Users.findOne({
            where: {email},
            include: {
                model: Vehicles
            }
        });

        if(!exist){
            const nuevo = await Users.create({name, lastName, email, photo});
            return res.status(200).send(nuevo);
        }

        return res.status(200).send(exist)
    } catch (error) {
        res.status(404).send(error)
    }
})

user.put("/:id", async (req, res) => {
  try {
    const state = req.body.active
    const id = req.params.id
    const user = await Users.findByPk(id);
    user.active = state;
    await user.update({id})
    await user.save()
    const userFinal = await Users.findByPk(id);
    res.status(201).send(userFinal);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

module.exports = user;