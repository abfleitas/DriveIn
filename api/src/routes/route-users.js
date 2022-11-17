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

module.exports = user;