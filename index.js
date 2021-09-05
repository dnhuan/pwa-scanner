const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(server);
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, () => {
  console.log("Server started on", port);
});

io.on("connection", (socket) => {
  socket.on("console", (msg) => {
    console.log("msg :>> ", msg);
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
