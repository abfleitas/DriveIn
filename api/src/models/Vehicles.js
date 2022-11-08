const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('vehicles', {
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
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
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
      type: DataTypes.INTEGER,
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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {timestamps: false}  
   );
};
