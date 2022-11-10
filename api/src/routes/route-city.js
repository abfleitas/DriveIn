const {Router} = require('express');
const {getAllCity} = require('../middlewares/city');
const {getcityDestacadas}=require("../middlewares/city")
const {City} = require('../db');
const vehicles = require('./route-vehicles');
const router = Router();
const {Vehicles}=require("../db");

router.get("/destacadas",async(req,res)=>{
    try {
        const destacadas= await getcityDestacadas()
        
         
        return res.status(200).send(destacadas)
    } catch (error) {
        console.log("no carga nada",error)
    }
   
})
router.get ("/", async(req,res)=>{
    const  name= req.query.name
    try {     
    // if(name){
     
    //        const buscoName= await City.findAll({
    //         where:{
    //           name:{
    //             [Op.iLike]: "%" + name +"%"
    //           },
    // //         //   include:{model:vehicle}
    //         }
    //       })
         
    //      return res.json(buscoName)          
       
    //}
    
    const dataCity= await getAllCity()   
    return  res.status(200).send(dataCity)
}catch (error) {
    res.status(404).send("la busqueda fallo")
  }
})

router.get("/:id", async(req, res)=>{
    const id = req.params.id.toUpperCase()
    try{
    if(!id) res.send({ msg:"id no existe"})
        const city =await City.findOne({
            where:{
                id:id
            },
            // includes:{
            //     model:Vehicles,
            //     attibute:["name"]
            // }
            
        })
        res.send(city)
   
    
    }catch(error){
        res.status(404).send("la busqueda fallo")
    }
})

 module.exports= router;
