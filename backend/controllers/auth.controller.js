const UserSchema = require('../modals/UserSchema');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const Register = async (req, res) => {
    // res.send("This register routr");
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, msg: "Password doesn't match" });
        }
        // check user
        const user = await UserSchema.findOne({ username });
        if (user) {
            return res.status(400).json({ success: false, msg: "User already exists!" });
        }
        // hashedPassword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // PROFILE : https://avatar-placeholder.iran.liara.run/
        const boyProfile = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
        const girlProfile = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;
        const newUser = new UserSchema({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfile : girlProfile,
        });
        if (newUser) {
            // GENERATE JWT TOKEN
            generateToken(newUser._id, res);
            const users = await newUser.save();
            res.status(201).json({ success: true, users, msg: "User successfull register!" });
        }
        else {
            res.status(400).json({ success: false, msg: "Invalid user data" });
        }

    } catch (error) {
        // console.log("Erorr in auth controller register function: ", error.message)
        res.status(500).json({ success: false, error: error.message, msg: "Something went wrong!" });
    }
}
const Login = async (req, res) => {
    res.send("This login routr");
}
const Logout = async (req, res) => {
    res.send("This logout routr");
}

module.exports = {
    Register,
    Login,
    Logout,
}