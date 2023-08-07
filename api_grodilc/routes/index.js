const appartementRouter = require("./appartement.route");
const authRouter = require(`./auth.route`);
const immeubleRouter = require("./immeuble.route");
// const userRouter = require(`./users.route`);

const appRouters = [
    authRouter,
    appartementRouter,
    immeubleRouter,
]

module.exports = appRouters;