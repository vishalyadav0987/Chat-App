const jwt = require('jsonwebtoken');
const UserSchema = require('../modals/UserSchema');

const protectRouteMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ success: false, msg: "Unauhtorized - No token provided" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECERET);
        if (!decode) {
            return res.status(401).json({ success: false, msg: "Unauhtorized - No token provided" });
        }
        console.log(decode);
        const user = await UserSchema.findById(decode.userId).select("-password");

        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found!" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protect route", error.message);
        return res.status(401).json({ success: false, error: error.message, msg: "Something went wrong!" });
    }
}

module.exports = protectRouteMiddleware;