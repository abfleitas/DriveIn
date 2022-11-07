const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('city', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    concessionaire: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    favorite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    airconditioning: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    transmition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {timestamps: false}  
   );
};
