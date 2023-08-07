const appartementController = require('../controller/appartement.controller');
const isLogin = require('../middleware/isLogin');

const express = require('express');
const appartementRouter = express.Router();
const path = '/appartements';

appartementRouter.get(`${path}`, isLogin, appartementController.getAllAppartements);
appartementRouter.get(`${path}/:id`, isLogin, appartementController.getAppartementById);
appartementRouter.get(`${path}/user`, isLogin, appartementController.getAppartementByUserId);
appartementRouter.post(`${path}`, isLogin, appartementController.createAppartement);
appartementRouter.put(`${path}/update/:id`, isLogin, appartementController.updateAppartement);
appartementRouter.delete(`${path}/:id`, isLogin, appartementController.deleteAppartement);


module.exports = appartementRouter;