const {Router} = require('express');
const {getAllCity} = require('../middlewares/city');
const City = require('../models/City');
const router = Router();



router.get("/:id", async(req, res)=>{
    const id = req.params.id.toUpperCase()
    if(!id) res.send({ msg:"id no existe"})
    try{
        const city = await city.findByPk(id,{include:{model:vehicle}})
        res.send (city)
    
    }catch(error){
        console.log (error)
    }
})



router.get ("/", async(req,res)=>{
    const  name= req.query.name
    if(name){
        try {
          
          
            buscoName= await City.findAll({
            where:{
              name:{
                [Op.iLike]: "%" + name +"%"
              },
              include:{model:vehicle}
            }
          })
         return res.json(buscoName)
          
        }catch (error) {
          res.status(404).send("la busqueda fallo")
        }

}
})