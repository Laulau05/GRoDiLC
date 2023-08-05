const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributs = {
        libelle: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        typeDocument: { type: DataTypes.STRING },
        document: { type: DataTypes.STRING },
        locataireId: { type: DataTypes.INTEGER, allowNull: false },
    }

    const Document = sequelize.define('Document', attributs); 
    Document.sync({alter: false})
    return Document;
}