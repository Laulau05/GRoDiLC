const authController = require(`../controller/auth.controller`);
const express = require(`express`);
const authRouter = express.Router();
const path = `/auth`;

authRouter.post(`${path}/register`, authController.register);
authRouter.post(`${path}/login`, authController.login);

module.exports = authRouter;
