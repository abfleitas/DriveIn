const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('city', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
     },
    country:{
      type: DataTypes.STRING,
      allowNull: false,
     },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {timestamps: false}  
   );
};
