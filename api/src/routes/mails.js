const {mails} = require('../middlewares/mails');
const { Router } = require("express");
const router = Router();


router.post("/", async (req, res) => {
    try {
      const { content } = req.body;
      await mails(content);
      
      return res.status(200).json(content);
    } catch (error) {
      return res.status(400).json(error);
    }
    
    }  )

    module.exports = router;
