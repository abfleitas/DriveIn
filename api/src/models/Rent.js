const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('rent', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dateInit:{
      type: DataTypes.DATEONLY,
      allowNull: false,
     },
    dateFinish:{
      type: DataTypes.DATEONLY,
      allowNull: false,
     },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },

  });
};
