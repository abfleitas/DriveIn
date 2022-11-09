const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('rent', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
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

  }, {timestamps: false}  
   );
};
