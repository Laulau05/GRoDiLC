const userService = require('../services/users.service');
const { hashPassword } = require('../utils/helpers');
const generateToken = require('../utils/generateToken');


class AuthControllers {

    //register
    async register(req, res, next){
        try {
            const { name, email, password } = req.body;
            const userFound = await userService.getUserByEmail(email);

            if(userFound){
                return res.status(400).json({message: "user already exist"});
            }

            const newUser = await userService.createUser({
                name, 
                email, 
                password: await hashPassword(password)
            });

            return res.status(201).json({
                success: true,
                message: "user register successfully",
                data: newUser
            });
        }catch(error){
            next(error);
        }
    }

    //login
    async login(req, res, next){
        const { email, password } = req.body;

        //findById
        const userFound = await userService.getUserByEmail(email);
        if(!userFound){
            return res.status(400).json({message: "user not found"});
        }

        //compare password
        //verify password
        const isMatched = await isPassMatched(password, user.password);

        if(!isMatched) {
            return res.json({ message: "invalid login credentials" });
        }else{
            return res.json({ 
                data: generateToken(user._id),
                message: "user logged in successfully"
            });
        }
    }

}


module.exports = new AuthControllers();