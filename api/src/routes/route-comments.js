const { Router } = require("express");
const router = Router();
const { postComments, getAllComentarios } = require("../middlewares/comments");
const comments = require("../middlewares/comments.json");

router.post("/", async (req, res) => {
  try {
    const response = await postComments(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await getAllComentarios();
    return res.status(200).json(comments);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;