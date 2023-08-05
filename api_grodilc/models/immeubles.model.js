const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributs = {
        name: { type: DataTypes.STRING, require },
        description: { type: DataTypes.STRING },
        address: DataTypes.STRING,
        photo: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        enabled: { type: DataTypes.BOOLEAN, defaultValue: true }
    }

    const Immeuble = sequelize.define('Immeuble', attributs);
    Immeuble.sync({alter: true})
    return Immeuble;
}