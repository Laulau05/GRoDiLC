var jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, "anyKey", (err, user) => {
            if (err) {
                return res.status(498).json({message: "Token expiré"});
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({message: "Vous n'êtes pas autorisé à utiliser cette route"});
    }
};

module.exports = isLogin