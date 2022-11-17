const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('users', {
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
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo: {
        type: DataTypes.STRING(512),
        allowNull: true,
        defaultValue: "https://www.pngitem.com/pimgs/m/499-4992374_sin-imagen-de-perfil-hd-png-download.png"
      },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      
  });
};