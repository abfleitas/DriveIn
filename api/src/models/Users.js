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
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
        type: DataTypes.STRING(512),
        allowNull: true,
      },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      
  }, {timestamps: false}  
   );
};
