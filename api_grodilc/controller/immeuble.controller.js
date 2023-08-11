const immeubleService = require('../services/immeubles.service');

class immeublesControllers {
    async getAllImmeubles(req, res, next){
        try {
            const immeubles = await immeubleService.getAllImmeubles();
            return res.status(200).json({
                success: true,
                message: "immeubles fetched successfully",
                data: immeubles
            });
        }catch(error){
            next(error);
        }
    }

    async getImmeubleById(req, res, next){
        try {
            const { id } = req.params;
            const immeubleFound = await immeubleService.getImmeubleById(id);
            if(!immeubleFound){
                return res.status(400).json({
                    success: false,
                    message: "immeuble not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "immeuble fetched successfully",
                data: immeubleFound
            });
        }catch(error){
            next(error);
        }
    }

    async getImmeubleByUserId(req, res, next){
        try {
            const id = req.user.id;
            const immeubleFound = await immeubleService.getImmeubleByUserId(id);
            if(!immeubleFound){
                return res.status(400).json({
                    success: false,
                    message: "immeuble not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "immeuble fetched successfully",
                data: immeubleFound
            });
        }catch(error){
            next(error);
        }
    }

    async createImmeuble(req, res, next){
        try {
            const { libelle, description, adress, userId } = req.body;
            const Id = req.user.id;
            const createdImmeuble = await immeubleService.createImmeuble({
                libelle,
                description,
                adress,
                userId: Id
            })
            return res.status(200).json({
                success: true,
                message: "immeuble created successfully",
                data: createdImmeuble
            });
        }catch(error){
            next(error);
        }
    }

    async updateImmeuble(req, res, next){
        try {
            const { id } = req.params;
            const immeuble = req.body;
            const updatedImmeuble = await immeubleService.updateImmeuble(id, immeuble);
            return res.status(200).json({
                success: true,
                message: "immeuble updated successfully",
                data: updatedImmeuble
            });
        }catch(error){
            next(error);
        }
    }

    async deleteImmeuble(req, res, next){
        try {
            const { id } = req.params;
            const deletedImmeuble = await immeubleService.deleteImmeuble(id);
            return res.status(200).json({
                success: true,
                message: "immeuble deleted successfully",
                data: deletedImmeuble
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = new immeublesControllers();