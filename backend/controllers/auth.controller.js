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
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new UserSchema({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfile : girlProfile,
        });
        const newUserAdd = await newUser.save();
        generateToken(newUserAdd._id, res); // Generate and set token

        const { password: userPassword, ...resData } = newUserAdd._doc;
        res.status(201).json({ success: true, resData, msg: "User successfully registered!" });

    } catch (error) {
        console.log("Erorr in auth controller register function: ", error.message)
        res.status(500).json({ success: false, error: error.message, msg: "Something went wrong!" });
    }
}
const Login = async (req, res) => {
    // res.send("This login routr");
    try {
        const { username, password } = req.body;
        const user = await UserSchema.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, msg: "Invalid credentials!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, msg: "Invalid credentials!" });
        }
        generateToken(user._id, res);
        console.log(user);
        
        const { password: userPassword, ...resData } = user._doc;
        res.status(200).json({ success: true, resData, msg: "User successfull logged in!" });

    } catch (error) {
        console.log("Erorr in auth controller login function: ", error.message);
        res.status(500).json({ success: false, error: error.message, msg: "Something went wrong!" });
    }
}
const Logout = async (req, res) => {
    // res.send("This logout routr");
    try {
        res.cookie("token", "", { maxAge: 0 });
        res.status(200).json({ success: true, msg: "User succesfully logout!" });
    } catch (error) {
        console.log("Erorr in auth controller login function: ", error.message)
        res.status(500).json({ success: false, error: error.message, msg: "Something went wrong!" });
    }

}

module.exports = {
    Register,
    Login,
    Logout,
}