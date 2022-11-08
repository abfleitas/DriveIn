const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
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
