const authController = require(`../controller/auth.controller`);
const express = require(`express`);
const userRouter = express.Router();
const path = `/auth`;

userRouter.post(`${path}/register`, authController.register);
userRouter.post(`${path}/login`, authController.login);

module.exports = userRouter;