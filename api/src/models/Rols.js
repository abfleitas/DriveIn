const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('rols', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    })
}