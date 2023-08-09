
const db = require('../config/db');

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    desactivateUser,
    activateUser,
}

async function getAllUsers(){
    const users = await db.user.findAll();
    return users;
}

async function getUserById(id){
    const user = await db.user.findByPk(id);
    return user;
}

async function getUserByEmail(email){
    const user = await db.user.findOne({where: {email}});
    return user;
}

async function createUser(user){
    const createdUser = await db.user.create(user);
    return createdUser;
}

async function updateUser(id, user){
    const updatedUser = await db.user.update(user, {where: {id}});
    return updatedUser;
}

async function deleteUser(id){
    const deletedUser = await db.user.destroy({where: {id}});
    return deletedUser;
}

async function desactivateUser(id){
    const desactivatedUser = await db.user.update({enabled: false}, {where: {id}});
    return desactivatedUser;
}

async function activateUser(id){
    const activatedUser = await db.user.update({enabled: true}, {where: {id}});
    return activatedUser;
}