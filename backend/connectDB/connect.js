const mongoose = require("mongoose");

const connectDB = (URI) => {
    return mongoose.connect(URI).then(() => {
        console.log("Database Succesfully connected");
    })
}
module.exports = connectDB;