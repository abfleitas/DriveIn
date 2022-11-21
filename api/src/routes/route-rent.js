const { Router } = require("express");
const { getRent } = require("../middlewares/rent");
const router = Router();


router.get("/", async (req, res) => {
    try {
      const {userId} = req.query  
      const allRents = await getRent(userId);
     
      return res.status(200).send(allRents);
    } catch (error) {
      res.status(404).send({error: error.message});
    }
  });

module.exports = router;
