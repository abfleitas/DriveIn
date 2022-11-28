const { Router } = require("express");
const router = Router();
const { postComments, getAllComentarios } = require("../middlewares/comments");
const getcomments = require("../middlewares/comments");
const { Comments } = require("../db.js");

router.post("/", async (req, res) => {
  try {
    const response = await postComments(req.body);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await getAllComentarios();
    let cantidad = await comments.length;

    return res
      .header("Content-Range", `0-10/${cantidad}`)
      .status(200)
      .json(comments);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/user/:id", getcomments.getCommentsById);
router.get("/vehicle/:id", getcomments.getCommentsByVehicleId);

module.exports = router;
