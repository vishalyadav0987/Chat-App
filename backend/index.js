const path = require('path');
const express = require("express");
// const app = express();
// const cors = require('cors');
const authRoutes = require('./routes/auth.route');
const messageRoutes = require('./routes/message.route');
const userRoutes = require('./routes/user.route');
const connectDB = require('./connectDB/connect');
const cookieParser = require("cookie-parser");
const { app, server } = require('./socket/socket')

const PORT = 5000 || process.env.PORT;


require("dotenv").config();

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

// const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Something went wrong in index file" + error.message);
    }
}

start();



