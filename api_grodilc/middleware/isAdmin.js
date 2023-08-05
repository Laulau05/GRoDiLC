//admin middleware

const {Role} = require('../utils/enum')

const isAdmin = (req, res, next) => {
    
    if (req?.user && req?.user?.role == Role.Admin) {
        next()
    } else {
        res.status(401).json({message: "you are not authorized to use this route"});
    }
};

module.exports = isAdmin