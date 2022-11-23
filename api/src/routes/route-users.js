const { Router } = require("express");
const { postUser, getUserById, deleteUser, getUsers, getUserByEmail, getLoginUser } = require("../middlewares/Users");
const { Users, Vehicles, Vehicles_Favorites} = require('../db')
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


user.put("/addfavorite", async(req,res)=>{
    try {
        const {id, idUser} = req.body 
        const usuario = await Users.findOne({
            where: {id: idUser},
            include: Vehicles
        });
        
        if(usuario){
            let vehicle = await Vehicles.findOne({where: {id: id}});
            await usuario.addVehicles(vehicle);
            return res.status(200).send("Favorito agregado");
        }
    }catch(error){
        res.status(404).send(error)
    }
});

user.delete("/addFavorite", async(req, res) => {
    try {
        const {id, idUser} = req.query;
        const exist = await Vehicles.findByPk(id);
        if(exist){
            const user = await Users.findByPk(idUser);
            if(user){
                await Vehicles_Favorites.destroy({
                    where: {userId: idUser, vehicleId: id}
                });
                return res.status(200).send("Favorito eliminado")
            }
        }
    } catch (error) {
        res.status(404).send({error: error.message})
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
    // console.log(error);
    res.status(400).send(error.message);
  }

});

user.post("/", async (req, res) => {
    try {
    const {id} = req.query    
    const details = await putUser(id);
      res.status(201).send(details);
    } catch (error) {
      res.status(400).send(error);
    }
  });

// ***********************REACT ADMIN *****************

user.delete("/", async (req, res) => {
    try {
      
      const {filter} = req.query
      const id = JSON.parse(filter);
      const unactive = [
        id.id.map(async e => {
            await deleteUser(e)
          })
      ]
      
      res.status(201).send(unactive);
    } catch (error) {
      res.status(400).send(error.message);
    }
  
  });

  user.post("/", async (req, res) => {
    try {
    const details = await postUser(req.body);
    
      res.status(201).send(details);
    } catch (error) {
      res.status(400).send(error);
    }
  });


// ***********************REACT ADMIN *****************
module.exports = user;