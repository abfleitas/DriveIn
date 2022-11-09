const {Router} = require('express');
const {getAllCity} = require('../middlewares/city');
const {City} = require('../db');
const router = Router();


router.get ("/", async(req,res)=>{
    const  name= req.query.name
    try {     
    // if(name){
    //        const buscoName= await City.findAll({
    //         where:{
    //           name:{
    //             [Op.iLike]: "%" + name +"%"
    //           },
    //         //   include:{model:vehicle}
    //         }
    //       })
    //      return res.json(buscoName)          
        
    // }
    const allCities= await getAllCity()
    return  res.status(200).send(allCities)


}catch (error) {
    res.status(404).send("la busqueda fallo")
  }
})

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

 module.exports= router;
