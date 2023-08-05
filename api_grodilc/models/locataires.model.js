const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributs = {
        firstName: { type: DataTypes.STRING, require },
        name: { type: DataTypes.STRING },
        lastName: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: 'email' },
        phoneNumber: DataTypes.STRING,
        password: { type: DataTypes.STRING },
        roleId: { type: DataTypes.INTEGER, defaultValue: 2 },
        userId: DataTypes.INTEGER,
        photo: DataTypes.STRING,
        cni: { type: DataTypes.STRING, unique: 'cni', require, length: 9  },
        enabled: { type: DataTypes.BOOLEAN, defaultValue: true },
    }
    const Locataire = sequelize.define('Locataire', attributs);

    Locataire.sync({alter: true})

    return Locataire;
}