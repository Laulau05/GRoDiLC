const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributs = {
        libelle: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        prix: { type: DataTypes.INTEGER, require },
        numAppartement: { type: DataTypes.INTEGER, unique: 'numAppartement' },
        immeubleId: { type: DataTypes.INTEGER, require },
    }

    const Appartement = sequelize.define('Appartement', attributs);
    Appartement.sync({alter: false})
    return Appartement;
}