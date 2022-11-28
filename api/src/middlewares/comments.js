const data = require("./comments.json");
const { Comments, Users, Vehicles } = require("../db");
const { Op } = require("sequelize");
const {dashboard} = require ("../middlewares/dashboard")

const postComments = async (data) => {
  const {
    id,
    confort,
    performance,
    security,
    priceQuality,
    recommended,
    description,
    vehicleId,
  } = data;
  try {
    //if (!description || !id) throw Error("There is nothing to comment");
    const findcomment = await Comments.findOne({
      where: {
        [Op.and]: [{ userId: id }, { vehicleId: vehicleId }],
      },
    });

    if (!findcomment) {
      const createComment = await Comments.create({
        confort: confort,
        performance: performance,
        security: security,
        priceQuality: priceQuality,
        recommended: recommended,
        description: description,
      });
      await createComment.setUser(id); //Setear la relación del usuario con el comentario...
      await createComment.setVehicle(vehicleId); //Setear la relacion del vehiculo con el comentario...
      return "Creado Satisfactoriamente!!!";
    } else {
      return "Comentario no creado!!!, El usuario ya ha comentado éste auto anteriormente!!!";
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getAllComentarios = async (props) => {
  
  const {order, corte, pagina} = dashboard(props)

  try {
    const allCommentsDb = await Comments.findAll({
      include: [{ model: Vehicles }, { model: Users }],
      order: order,
      limit:corte,
      offset: pagina,
    });
    for (const elements of allCommentsDb) {
      const user = await Users.findByPk(elements.userId)
      elements.userId = user.name
    }
 
    return allCommentsDb;
  } catch (error) {
    console.log(error.message);
  }
};

const getCommentsById = async (req, res) => {
  try {
    const { id } = req.params;

    const getCommentUser = await Comments.findAll({
      where: { userId: id },
    });

    res.status(200).send(getCommentUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Hubo un error en la petición!!!");
  }
};

const getCommentsByVehicleId = async (req, res) => {
  try {
    const { id } = req.params;

    const getCommentVehicle = await Comments.findAll({
      where: { vehicleId: id },
      include: { model: Users },
    });

    res.status(200).send(getCommentVehicle);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Hubo un error en la petición!!!");
  }
};

module.exports = {
  postComments,
  getAllComentarios,
  getCommentsById,
  getCommentsByVehicleId,
};
