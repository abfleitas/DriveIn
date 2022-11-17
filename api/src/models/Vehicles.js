const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('vehicles', {
    id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    transmition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    air: {
      type: DataTypes.BOOLEAN
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },

    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    initialPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // score: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },



  }, {timestamps: false}  
   );
};
