const {Sequelize} = require('sequelize');
const axios = require("axios");
const {Users} = require('../db.js')

export async function postUser(req, res) {
    const { name, lastName, phone, whatsapp, email, password, photo, active} = req.body;
    const newUser ={ name, lastName, phone, whatsapp, email, password, photo, active };
    try {
      if (
        !name ||
        !lastName ||
        !phone ||
        !whatsapp ||
        !email ||
        !password 
      ) {
        return res.json({ error: "Incomplete information" });
      }
      
      await Users.create(newUser);
      res.status(200).json(newUser);
      return;
    } catch (error) {
      res.json(error);
      return;
    }
  }


  export async function getUserById(req, res) {
    try {
      const {id} = req.params;
      
      let user = await Users.getByPk(id);
      user? res.status(200).json(user) : res.status(400).json('No existe ese usuario');
  
    } catch (error) {
      res.json(error);
      return;
    }
  }

  export async function getUsers(req, res) {
    try {

      let users = await Users.findAll(
        {
            include: {
                model: favorites,
                model: rent
            }
        }
      );
      return res.status(200).json(users)
    } catch (error) {
      res.json(error);
      return;
    }
  }

