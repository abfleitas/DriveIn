const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('concessionarie', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    photo: {
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
