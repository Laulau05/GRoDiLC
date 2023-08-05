//methode generation du token 
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, "anyKey", { expiresIn: '3h'});
}

module.exports = generateToken;