const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: DataTypes.STRING,
        level: DataTypes.INTEGER,
    };

    const Role = sequelize.define('Role', attributes);

    Role.sync({alter: true})
    .then(async ()=>{
        const roleDefault1 = {
            name: 'admin',
            level: 1
        }

        const roleDefault2 = {
            name: 'locataire',
            level: 2
        }

        const roleDefault3 = {
            name: 'agent',
            level: 3
        }
        if (!(await Role.findOne({where: {name: roleDefault1.name}}))) {
            const role = Role.build(roleDefault1)
            return role.save()
        }
        if (!(await Role.findOne({where: {name: roleDefault2.name}}))) {
            const role = Role.build(roleDefault2)
            return role.save()
        }
        if (!(await Role.findOne({where: {name: roleDefault3.name}}))) {
            const role = Role.build(roleDefault3)
            return role.save()
        }
        return false
    })
    return Role
}