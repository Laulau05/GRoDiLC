const userService = require('../services/users.service');
const { hashPassword } = require('../utils/helpers');


class usersControllers {

    //current user
    async fetchCurentUser(req, res, next){
        console.log("req", req.user);
        const id = req.user.id;
        console.log("id", id);
        const userFound = await userService.getUserById(id);
        console.log("!user", userFound);
        try {
            if(!userFound){
                return res.status(400).json({
                    message: "user not found"
                })
            }
            console.log("userFound", userFound);
            return res.status(200).json({
                success: true,
                message: "user fetched successfully",
                data: userFound
            });
        }catch(error){
            next(error);
        }
    }
    //create
    async create(req, res, next){
        try {
            const { firstName, lastName, phoneNumber, email, cni } = req.body;
            const userFound = await userService.getUserByEmail(email);

            if(userFound){
                return res.status(400).json({message: "user already exist"});
            }

            const newUser = await userService.createUser({
                firstName, 
                email, 
                lastName,
                cni,
                phoneNumber
                // password: await hashPassword(password)
            });

            return res.status(201).json({
                success: true,
                message: "user created successfully",
                data: newUser
            });
        }catch(error){
            next(error);
        }
    }

    async createLocataire(req, res, next){
        try {
            const { firstName, lastName, phoneNumber, email, cni, userId, appartementId } = req.body;
            const userFound = req.user.id

            const newUser = await userService.createLocataire({
                firstName, 
                email, 
                lastName,
                cni,
                phoneNumber,
                userId: userFound,
                appartementId
                // password: await hashPassword(password)
            });

            return res.status(201).json({
                success: true,
                message: "locataire created successfully",
                data: newUser
            });
        }catch(error){
            next(error);
        }
    }

    //read
    async read(req, res, next){
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json({
                success: true,
                message: "users fetched successfully",
                data: users
            });
        }catch(error){
            next(error);
        }
    }

    async readLocataire(req, res, next){
        try {
            const users = await userService.getAllLocataires();
            return res.status(200).json({
                success: true,
                message: "locataires fetched successfully",
                data: users
            });
        }catch(error){
            next(error);
        }
    }

    //update
    async update(req, res, next){   

        //get id from params
        const { id } = req.params;
       try{
        const userFound = await userService.getUserById(id);
        if(!userFound){
            return res.status(400).json({
                message: "user not found"
            })
        }

        //get data from body
        const { name, email } = req.body;

        //update user
        const updatedUser = await userService.updateUser(id, {
            name,
            email,
        })

        return res.status(200).json({
            success: true,
            message: "user updated successfully",
            data: updatedUser
        });
       }catch(error){
           next(error);
       }
    }

    async updateLocataire(req, res, next){   

        //get id from params
        const { id } = req.params;
       try{
        

        //get data from body
        const { firstName, lastName, phoneNumber, email, cni, userId, appartementId } = req.body;
        const userFound = req.user.id;
        //update user
        const updatedUser = await userService.updateUser(id, {
            firstName,
            lastName,
            phoneNumber,
            cni,
            appartementId,
            email,
            userId: userFound
        })

        return res.status(200).json({
            success: true,
            message: "user updated successfully",
            data: updatedUser
        });
       }catch(error){
           next(error);
       }
    }

    //delete
    async delete(req, res, next){
        try {
            const { id } = req.params;
            const userFound = await userService.getUserById(id);
            if(!userFound){
                return res.status(400).json({
                    message: "user not found"
                })
            }

            await userService.deleteUser(id);

            return res.status(200).json({
                success: true,
                message: "user deleted successfully"
            });
        }catch(error){
            next(error);
        }
    }

    //get user by id
    async getUserById(req, res, next){
        try {
            const { id } = req.params;
            const userFound = await userService.getUserById(id);
            if(!userFound){
                return res.status(400).json({
                    message: "user not found ici"
                })
            }

            return res.status(200).json({
                success: true,
                message: "user fetched successfully",
                data: userFound
            });
        }catch(error){
            next(error);
        }
    }

}

module.exports = new usersControllers();