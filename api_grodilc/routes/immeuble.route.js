const isLogin = require('../middleware/isLogin');
const immeubleController = require('../controller/immeuble.controller');

const express = require('express');
const immeubleRouter = express.Router();

const path = '/immeubles';

immeubleRouter.get(`${path}`, isLogin, immeubleController.getAllImmeubles);
immeubleRouter.get(`${path}/:id`, isLogin, immeubleController.getImmeubleById);
immeubleRouter.get(`${path}/user`, isLogin, immeubleController.getImmeubleByUserId);
immeubleRouter.post(`${path}`, isLogin, immeubleController.createImmeuble);
immeubleRouter.put(`${path}/update/:id`, isLogin, immeubleController.updateImmeuble);
immeubleRouter.delete(`${path}/:id`, isLogin, immeubleController.deleteImmeuble);

module.exports = immeubleRouter;