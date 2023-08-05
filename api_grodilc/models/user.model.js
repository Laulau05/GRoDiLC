const { DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');

module.exports = model;

function model(sequelize) {
    const attributs = {
        firstName: { type: DataTypes.STRING, require },
        name: { type: DataTypes.STRING },
        lastName: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: 'email' },
        phoneNumber: DataTypes.INTEGER,
        password: { type: DataTypes.STRING },
        roleId: { type: DataTypes.INTEGER, defaultValue: 1 },
        photo: DataTypes.STRING,
        cni: { type: DataTypes.STRING, unique: 'cni', require, length: 9  },
        enabled: { type: DataTypes.BOOLEAN, defaultValue: true },
    }

    const User = sequelize.define('User', attributs);
    User.sync({alter: true})
    .then(async ()=>{
        const salt = await bcrypt.genSalt(10);
        const userDefault = {
            firstName: 'John',
            name: 'John Doe',
            lastName: 'Doe',
            email: 'admin@gmail.com',
            phoneNumber: '+237000000000',
            photo: '',
            cni: '123456789',
            photo: 'https://www.w3schools.com/howto/img_avatar.png',
            password: await bcrypt.hash('password', salt),
            enabled: true
        }
        if (!(await User.findOne({where: {email: userDefault.email}}))) {
            const user = User.build(userDefault)
            return user.save()
        }
        return false
    })
    return User
}