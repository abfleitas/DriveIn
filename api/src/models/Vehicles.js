const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('vehicles', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    IDconcessionaire: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    model:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {timestamps: false}  
   );
};
