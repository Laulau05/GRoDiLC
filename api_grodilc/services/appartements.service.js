
const db = require('../config/db');

module.exports = {
    getAllAppartements,
    getAppartementById,
    getAppartementByUserId,
    createAppartement,
    updateAppartement,
    deleteAppartement
}


async function getAllAppartements(){
    const appartements = await db.appartement.findAll();
    return appartements;
}

async function getAppartementById(id){
    const appartement = await db.appartement.findByPk(id);
    return appartement;
}

async function getAppartementByImmeubleId(id){
    const appartement = await db.appartement.findOne({where: {userId: id}});
    return appartement;
}

async function createAppartement(appartement){
    const createdAppartement = await db.appartement.create(appartement);
    return createdAppartement;
}

async function updateAppartement(id, appartement){
    const updatedAppartement = await db.appartement.update(appartement, {where: {id}});
    return updatedAppartement;
}

async function deleteAppartement(id){
    const appartement = await getAppartementById(id);
    if(!appartement) return null;
    await appartement;
}