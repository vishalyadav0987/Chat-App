const jwt = require('jsonwebtoken');

const generateToken = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECERET, {
        expiresIn: '7d',
    });
    res.cookie('token', token, {
        httpOnly: true, // prevent the xss attack
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
}


module.exports = generateToken;