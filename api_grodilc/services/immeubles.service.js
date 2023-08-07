const db = require('../config/db');


module.exports = {
    getAllImmeubles,
    getImmeubleById,
    getImmeubleByUserId,
    createImmeuble,
    updateImmeuble,
    deleteImmeuble
}

async function getAllImmeubles(){
    const immeubles = await db.immeuble.findAll();
    return immeubles;
}

async function getImmeubleById(id){
    const immeuble = await db.immeuble.findByPk(id);
    return immeuble;
}

async function getImmeubleByUserId(id){
    const immeuble = await db.immeuble.findOne({where: {userId: id}});
    return immeuble;
}

async function createImmeuble(immeuble){
    const createdImmeuble = await db.immeuble.create(immeuble);
    return createdImmeuble;
}

async function updateImmeuble(id, immeuble){
    const updatedImmeuble = await db.immeuble.update(immeuble, {where: {id}});
    return updatedImmeuble;
}

async function deleteImmeuble(id){
    const immeuble = await getImmeubleById(id);
    if(!immeuble) return null;
    await immeuble.destroy();
}

