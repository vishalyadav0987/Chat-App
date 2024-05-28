const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

// socket id
const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // Emit the list of online users to all connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        if (userId && userId !== "undefined") {
            delete userSocketMap[userId];
        }
        // Emit the updated list of online users to all connected clients
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

module.exports = { app, io, server ,getReceiverSocketId};
