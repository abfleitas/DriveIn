const { Router } = require("express");
const router = Router();
const { Comments } = require("../db.js");
const {getAllComentarios} = require("../middlewares/comments");
const comments = require("../middlewares/comments.json");

router.post("/", async (req, res) => {
  try {
    const {comments} = req.body;
    if (!comments) {
      return res.status(400).json({ error: "There is nothing to comment" });
    }
    await Comments.create(comments);
    return res.status(200).json(comments);
  } catch (error) {

    res.status(400).json(error);

  }
});
router.get("/", async (req, res) => {
  try {
         
    // const comments = await Comments.findAll({
    //   include: {
    //     model: Users,
    //     model: Vehicles,
    //   },
    // });

    return res.status(200).json(comments);
  } catch (error) {
    res.status(400).json(error);


  }
});
module.exports = router;
