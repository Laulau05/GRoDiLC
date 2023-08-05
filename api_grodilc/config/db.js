const config = require('./config');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize()


async function initialize() {
    // create db if it doesn't already exist
    const { host, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.user = require('../models/user.model')(sequelize);
    db.role = require('../models/role.model')(sequelize);
    db.immeuble = require('../models/immeubles.model')(sequelize);
    db.appartement = require('../models/appartement.model')(sequelize);
    db.locataire = require('../models/locataires.model')(sequelize);
    db.document = require('../models/documents.model')(sequelize);

    // define relationships
    // db.role.hasMany(db.user, {foreignKey: 'roleId'});
    // db.user.belongsTo(db.role, {foreignKey: 'roleId'});
    db.immeuble.hasMany(db.appartement, {as: 'appartement', foreignKey: 'immeubleId'}); //ici on a une relation 1-n
    db.appartement.belongsTo(db.immeuble, {as: 'immeuble', foreignKey: 'immeubleId'}); //ici la relation est n-1
    db.appartement.hasMany(db.locataire, { as: 'locataire' ,foreignKey: 'appartementId'}); //ici on a une relation 1-n
    db.locataire.belongsTo(db.appartement, {as: 'appartement' ,foreignKey: 'appartementId'}); //ici la relation est n-1
    db.user.hasMany(db.locataire, {as: 'locataire' ,foreignKey: 'userId'}); //ici on a une relation 1-n
    db.locataire.belongsTo(db.user, {as: 'user' ,foreignKey: 'userId'}); //ici la relation est n-1
    db.user.hasMany(db.document, {as: 'document' ,foreignKey: 'userId'}); //ici on a une relation 1-n
    db.document.belongsTo(db.user, {as: 'user', foreignKey: 'userId'}); //ici la relation est n-1

    await sequelize.sync({alter: true}); 

}
