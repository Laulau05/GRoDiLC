const appartementRouter = require("./appartement.route");
const authRouter = require(`./auth.route`);
const immeubleRouter = require("./immeuble.route");
const userRouter = require("./user.route");

const appRouters = [
    authRouter,
    appartementRouter,
    immeubleRouter,
    userRouter
]

module.exports = appRouters;