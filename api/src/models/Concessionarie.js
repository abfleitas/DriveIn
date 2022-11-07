const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('concessionarie', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
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
  }, {timestamps: false}  
   );
};
