const jwt = require('jsonwebtoken');

const generateToken = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECERET, {
        expiresIn: '7d',
    });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development', // Use secure flag in production
        sameSite: 'strict',
    })
}


module.exports = generateToken;