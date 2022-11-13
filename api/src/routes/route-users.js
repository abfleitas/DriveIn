const { Router } = require("express");
const { postUser, getUserById, getUsers } = require("../middlewares/Users");
const router = Router();

router.post("/", async (req, res) => {
  try {
    data = req.body;
    const details = await postUser(data);
    res.status(201).send(details);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserById(id);
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await getUsers();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});
