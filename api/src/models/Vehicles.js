const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('vehicles', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    year:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    transmition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    air: {
      type: DataTypes.BOOLEAN,
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

    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    idCity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    initialPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    // score: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },




  }, {timestamps: false}  
   );
};
