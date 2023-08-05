const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributs = {
        name: { type: DataTypes.STRING, require },
        description: { type: DataTypes.STRING },
        typeDocument: { type: DataTypes.STRING },
        document: { type: DataTypes.STRING },
        locataireId: { type: DataTypes.INTEGER, require },
    }

    const Document = sequelize.define('Document', attributs);
    Document.sync({alter: true})
    return Document;
}