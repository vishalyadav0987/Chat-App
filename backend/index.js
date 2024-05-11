const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require('./connectDB/connect');
const authRoutes = require('./routes/auth.route');

app.use(express.json());

app.use('/api/v1/auth',authRoutes);
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


