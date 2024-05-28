// const mongoose = require("mongoose");

// const connectDB = (URI) => {
//     return mongoose.connect(URI).then(() => {
//         console.log("Database Succesfully connected");
//     })
// }
// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database successfully connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
