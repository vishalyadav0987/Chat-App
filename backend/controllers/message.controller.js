const ConversionSchema = require("../modals/ConversionSchema");
const MessageSchema = require("../modals/MessageSchema");

const sendMessage = async (req, res) => {
    // console.log("Li" + req.params.id);
    // res.send("Hlo my name is vishal");
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const { _id: senderId } = req.user;

        let conversation = await ConversionSchema.findOne({
            participants: { $all: [senderId, recieverId] },
        });
        if (!conversation) {
            conversation = await ConversionSchema.create({
                participants: [senderId, recieverId],
            });
        }
        const newMessage = new MessageSchema({
            senderId,
            recieverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        Promise.all([conversation.save(), newMessage.save()]);
        // res.status(201).json({
        //     success: true,
        //     msg: "Message succesfully sent!",
        //     conversation: newMessage
        // });
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in send Message function: ", error.message);
        res.status(500).json({ success: false, msg: "Internal sever error!", error: error.message });
    }
}

const getMessage = async (req, res) => {
    try {
        const { id: userToChat } = req.params;
        const { _id: senderId } = req.user;
        const conversation = await ConversionSchema.findOne({
            participants: { $all: [senderId, userToChat] },
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);
        // res.status(200).json({ success: true, messagesWithUser: conversation.messages })
        const messages = conversation.messages
        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in get Message function: ", error.message);
        res.status(500).json({ success: false, msg: "Internal sever error!", error: error.message });
    }
}


module.exports = {
    sendMessage,
    getMessage,
}