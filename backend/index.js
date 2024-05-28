const path = require('path');
const express = require("express");
// const app = express();
// const cors = require('cors');
require("dotenv").config();
const authRoutes = require('./routes/auth.route');
const messageRoutes = require('./routes/message.route');
const userRoutes = require('./routes/user.route');
const connectDB = require('./connectDB/connect');
const cookieParser = require("cookie-parser");
const { app, server } = require('./socket/socket')


// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// }));
const PORT = 5000 || process.env.PORT;

// const __dirname = path.resolve();
app.use(cookieParser());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

// app.get('/test', (req, res) => {
//     res.send(`<h1>This is chat app backend</h1>`);
// });
const __dirname = path.resolve(); // Define __dirname here

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URI);
//         server.listen(PORT, () => {
//             console.log(`Server running at http://localhost:${PORT}`);
//         });
//     } catch (error) {
//         console.log("Something went wrong in index file" + error.message);
//     }
// }

// start();
const start = async () => {
    try {
        // Ensure the environment variable is correctly loaded
        console.log('MongoDB URI:', process.env.MONGO_URI);
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        // Connect to the database
        await connectDB(process.env.MONGO_URI);

        // Start the server
        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Something went wrong in index file:', error.message);
    }
};

start();


