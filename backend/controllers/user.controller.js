const UserSchema = require('../modals/UserSchema');

const getAllUser = async (req, res) => {
    try {
        const { _id: loggedInUserId } = req.user;
        const allUsers = await UserSchema.find({ _id: { $ne: loggedInUserId } })
        // woh use jinki id logged user se alag hai
        res.status(200).json({ success: true, allUsers });
    } catch (error) {
        console.log("Error in get User function: ", error.message);
        res.status(500).json({ success: false, msg: "Internal sever error!", error: error.message });
    }
}

module.exports = {
    getAllUser,
}