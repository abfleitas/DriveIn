const { Router } = require("express");
const router = Router();
const { Comments } = require("../db.js");
const {getAllComentarios } = require("../middlewares/comments");
const comments = require("../middlewares/comments.json");

router.post("/", async (req, res) => {
  try {
    const { comment } = req.body;
    if (!comment) {
      return res.status(400).json({ error: "There is nothing to comment" });
    }
    await Comments.create(comment);
    return res.status(200).json(comment);
  } catch (error) {

    res.status(400).json(error);

  }
});
router.get("/", async (req, res) => {
  try {

    // const comentarios = await Comments.findAll({
    //   include: {
    //     model: users,
    //     model: vehicles,
    //   },
    // });

    return res.status(200).json(comments);
  } catch (error) {
    res.status(400).json(error);


  }
});
module.exports = router;
