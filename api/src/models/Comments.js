const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        confort: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        performance: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        security: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        priceQuality: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        recommended: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        }, 
        description: {
            type: DataTypes.STRING
        }
    })
};