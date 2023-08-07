const appartementRouter = require("./appartement.route");
const authRouter = require(`./auth.route`);
// const userRouter = require(`./users.route`);

const appRouters = [
    authRouter,
    appartementRouter,
]

module.exports = appRouters;