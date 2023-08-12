const appartementService = require('../services/appartements.service');
const db = require('../config/db');

class appartementsControllers {

    async getAllAppartements(req, res, next){
        try {
            const appartements = await db.appartement.findAll({
                include: [
                    {
                        model: db.immeuble,
                        as: 'immeubleAssoc',
                        attributes: ['libelle', 'address']
                    }
                ]
            });
            return res.status(200).json({
                success: true,
                message: "appartements fetched successfully",
                data: appartements
            });
        }catch(error){
            next(error);
        }
    }

    async getAppartementById(req, res, next){
        try {
            const { id } = req.params;
            const appartementFound = await appartementService.getAppartementById(id);
            if(!appartementFound){
                return res.status(400).json({
                    success: false,
                    message: "appartement not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "appartement fetched successfully",
                data: appartementFound
            });
        }catch(error){
            next(error);
        }
    }

    async getAppartementByUserId(req, res, next){
        try {
            const id = req.user.id;
            const appartementFound = await appartementService.getAppartementByUserId(id);
            if(!appartementFound){
                return res.status(400).json({
                    success: false,
                    message: "appartement not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "appartement fetched successfully",
                data: appartementFound
            });
        }catch(error){
            next(error);
        }
    }

    async createAppartement(req, res, next){
        try {
            const appartement = req.body;
            const createdAppartement = await appartementService.createAppartement(appartement);
            return res.status(200).json({
                success: true,
                message: "appartement created successfully",
                data: createdAppartement
            });
        }catch(error){
            next(error);
        }
    }

    async updateAppartement(req, res, next){
        try {
            const { id } = req.params;
            const appartement = req.body;
            const updatedAppartement = await appartementService.updateAppartement(id, appartement);
            return res.status(200).json({
                success: true,
                message: "appartement updated successfully",
                data: updatedAppartement
            });
        }catch(error){
            next(error);
        }
    }

    async deleteAppartement(req, res, next){
        try {
            const { id } = req.params;
            const deletedAppartement = await appartementService.deleteAppartement(id);
            if(!deletedAppartement){
                return res.status(400).json({
                    success: false,
                    message: "appartement not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "appartement deleted successfully",
                data: deletedAppartement
            });
        }catch(error){
            next(error);
        }
    }

}

module.exports = new appartementsControllers();