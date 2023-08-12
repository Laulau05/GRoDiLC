const userController = require(`../controller/user.controller`);
const isLogin = require('../middleware/isLogin');
const isAdmin = require('../middleware/isAdmin')

const express = require(`express`);
const userRouter = express.Router();
const path = `/users`;


userRouter.get(`${path}/`, isLogin, userController.readLocataire);
userRouter.get(`${path}/:id`, isLogin, userController.getUserById);
userRouter.post(`${path}/create`, isLogin, userController.createLocataire);
userRouter.put(`${path}/update/:id`, isLogin, userController.updateLocataire);
userRouter.delete(`${path}/:id`, isLogin, userController.delete);
userRouter.get(`${path}/login/current`, isLogin, userController.fetchCurentUser);

module.exports = userRouter;