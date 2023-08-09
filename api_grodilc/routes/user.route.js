const userController = require(`../controller/user.controller`);
const isLogin = require('../middleware/isLogin');
const isAdmin = require('../middleware/isAdmin')

const express = require(`express`);
const userRouter = express.Router();
const path = `/users`;


userRouter.get(`${path}/`, isLogin, userController.read);
userRouter.get(`${path}/:id`, isLogin, userController.getUserById);
userRouter.post(`${path}`, isLogin, isAdmin, userController.create);
userRouter.put(`${path}/update/:id`, isLogin, isAdmin, userController.update);
userRouter.delete(`${path}/:id`, isLogin, userController.delete);
userRouter.get(`${path}/login/current`, isLogin, userController.fetchCurentUser);

module.exports = userRouter;