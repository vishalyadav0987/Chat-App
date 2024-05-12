const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require('./routes/auth.route');
const messageRoutes = require('./routes/message.route');
const userRoutes = require('./routes/user.route');
const connectDB = require('./connectDB/connect');
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/message', messageRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/test', (req, res) => {
    res.send(`<h1>This is chat app backend</h1>`);
});

const PORT = 3000 || process.env.PORT;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Something went wrong in index file" + error.message);
    }
}

start();


