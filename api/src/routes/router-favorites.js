const {Router} = require("express");
const Users= require("../db");
const favorite_router = Router()
const {getUser} = require ("../middlewares");
const { getUserById } = require("../middlewares/Users");

favorite_router.get("/", async(req,res)=>{
    const {id}= req.params
try {
    const favorite = await getUserById(id)
    const data= Users.findOne({
        where:{
           favorite:favorite.length !==0,        
        },
        include:{
            model:Vehicles,
            
        }
    })
    res.status(200).send(data);

    
} catch (error) {
    console.log(error)
}
})