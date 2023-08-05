const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributs = {
        name: { type: DataTypes.STRING, require },
        description: { type: DataTypes.STRING, require },
        prix: { type: DataTypes.INTEGER, require },
        numAppartement: { type: DataTypes.INTEGER, unique: 'numAppartement' },
        immeubleId: { type: DataTypes.INTEGER, require },
    }

    const Appartement = sequelize.define('Appartement', attributs);
    Appartement.sync({alter: true})
    return Appartement;
}