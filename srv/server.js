const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("create-something", (data) => {
    console.log("create-something event received with data:", data);
    // Handle the event and possibly emit to other clients
    socket.emit("foo", { message: "something created" });
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
