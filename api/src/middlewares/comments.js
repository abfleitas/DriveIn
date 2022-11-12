const data = require("./comments.json");
const { Comments } = require("../db");

const getAllComentarios = async () => {
  try {
    const allComments = await Comments.findAll();
    return allComments;
  } catch (error) {
    console.log();
  }
};
module.exports = {
  getAllComentarios,
};
