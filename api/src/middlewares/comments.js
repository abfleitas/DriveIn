const data = require("./comments.json");
const { Comments, Users } = require("../db");

const postComments = async (data) => {
  const { description, id } = data;
  if (!description || !id) throw Error("There is nothing to comment");
  const createComment = await Comments.create({ description });
  await createComment.addUsers(id); //
  return "Comment created";
};

const getAllComentarios = async () => {
  try {
    const allCommentsDb = await Comments.findAll({include:{model: Users}});
    const allComments = allCommentsDb.map(el => {
      return {
        id: el.id,
        description: el.description,
        user: {
          id: el.users[0].id,
          name: el.users[0].name,
          photo: el.users[0].photo
        }
      };
    });



    return data;
  } catch (error) {
    console.log();
  }
};

module.exports = {
  postComments,
  getAllComentarios,
};
