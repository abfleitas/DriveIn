const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('concessionarie', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adress:{
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    history: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      whatsapp: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  }, {timestamps: false}  
   );
};
